"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

const FRAME_COUNT = 109;
const CACHE_RADIUS = 8;
const MAX_PARALLEL = 4;

type EventsFramesCanvasProps = { progress: MotionValue<number> };

export function EventsFramesCanvas({ progress }: EventsFramesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const imagesRef = useRef(new Map<number, HTMLImageElement>());
  const frameBlobsRef = useRef(new Map<number, Blob>());
  const pendingRef = useRef(new Set<number>());
  const queuedRef = useRef(new Set<number>());
  const aliveRef = useRef(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.round(width * ratio);
    const pixelHeight = Math.round(height * ratio);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.fillStyle = "#06090d";
    context.fillRect(0, 0, width, height);

    const position = currentRef.current * (FRAME_COUNT - 1);
    const lower = Math.floor(position);
    const upper = Math.min(lower + 1, FRAME_COUNT - 1);
    const fraction = position - lower;
    const first = imagesRef.current.get(lower);
    const second = imagesRef.current.get(upper);
    const image = first ?? second;
    if (!image) return;

    const paint = (frame: HTMLImageElement, alpha: number) => {
      // Match the previous background image's object-cover composition.
      const scale = Math.max(width / frame.naturalWidth, height / frame.naturalHeight);
      const drawWidth = frame.naturalWidth * scale;
      const drawHeight = frame.naturalHeight * scale;
      context.globalAlpha = alpha;
      context.filter = "brightness(0.72) saturate(0.78)";
      context.drawImage(frame, (width - drawWidth) / 2, (height - drawHeight) * 0.47, drawWidth, drawHeight);
    };

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    paint(image, 1);
    if (first && second && first !== second) paint(second, fraction);
    context.globalAlpha = 1;
    context.filter = "none";
  }, []);

  const requestDraw = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      draw();
    });
  }, [draw]);

  const scheduleAround = useCallback((center: number) => {
    const images = imagesRef.current;
    const pending = pendingRef.current;
    const queued = queuedRef.current;
    const wanted = new Set<number>();

    for (let distance = 0; distance <= CACHE_RADIUS; distance += 1) {
      const candidates = distance === 0 ? [center] : [center + distance, center - distance];
      for (const frame of candidates) {
        if (frame < 0 || frame >= FRAME_COUNT) continue;
        wanted.add(frame);
        if (!images.has(frame) && !pending.has(frame)) queued.add(frame);
      }
    }

    for (const frame of [...queued]) if (!wanted.has(frame)) queued.delete(frame);
    for (const frame of [...images.keys()]) {
      if (Math.abs(frame - center) > CACHE_RADIUS + 1) images.delete(frame);
    }

    const pump = () => {
      if (!aliveRef.current) return;
      while (pending.size < MAX_PARALLEL && queued.size > 0) {
        const next = [...queued].sort((a, b) => Math.abs(a - center) - Math.abs(b - center))[0];
        queued.delete(next);
        pending.add(next);
        const image = new Image();
        image.decoding = "async";
        let objectUrl: string | undefined;
        image.onload = () => {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          pending.delete(next);
          if (!aliveRef.current) return;
          images.set(next, image);
          requestDraw();
          pump();
        };
        image.onerror = () => {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          pending.delete(next);
          pump();
        };
        const path = `/frames/eventos/frames/frame_${String(next + 1).padStart(5, "0")}.webp`;
        const blob = frameBlobsRef.current.get(next);
        if (blob) {
          objectUrl = URL.createObjectURL(blob);
          image.src = objectUrl;
        } else {
          image.src = path;
        }
      }
    };
    pump();
  }, [requestDraw]);

  useEffect(() => {
    aliveRef.current = true;
    scheduleAround(0);
    const preloadController = new AbortController();
    let preloadCursor = 0;
    const preloadWorker = async () => {
      while (aliveRef.current && preloadCursor < FRAME_COUNT) {
        const index = preloadCursor++;
        const path = `/frames/eventos/frames/frame_${String(index + 1).padStart(5, "0")}.webp`;
        try {
          const response = await fetch(path, { signal: preloadController.signal, priority: "low" });
          if (!response.ok) continue;
          const blob = await response.blob();
          if (aliveRef.current) frameBlobsRef.current.set(index, blob);
        } catch {
          if (preloadController.signal.aborted) return;
        }
      }
    };
    void Promise.all(Array.from({ length: 3 }, () => preloadWorker()));
    const canvas = canvasRef.current;
    const observer = canvas && typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(requestDraw)
      : null;
    if (canvas) observer?.observe(canvas);
    return () => {
      aliveRef.current = false;
      preloadController.abort();
      observer?.disconnect();
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      imagesRef.current.clear();
      frameBlobsRef.current.clear();
      pendingRef.current.clear();
      queuedRef.current.clear();
    };
  }, [requestDraw, scheduleAround]);

  useMotionValueEvent(progress, "change", (value) => {
    targetRef.current = Math.max(0, Math.min(1, value));
    scheduleAround(Math.round(targetRef.current * (FRAME_COUNT - 1)));

    if (rafRef.current !== null) return;
    const animate = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.2;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0005) {
        currentRef.current = targetRef.current;
        rafRef.current = null;
        draw();
        return;
      }
      draw();
      rafRef.current = window.requestAnimationFrame(animate);
    };
    rafRef.current = window.requestAnimationFrame(animate);
  });

  return <canvas ref={canvasRef} aria-label="Sequência de imagens de eventos controlada pelo scroll" className="absolute inset-0 h-full w-full" />;
}
