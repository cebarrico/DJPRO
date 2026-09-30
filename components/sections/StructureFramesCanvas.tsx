"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

const FRAME_COUNT = 109;
const PRELOAD_RADIUS = 8;
const MAX_PARALLEL_LOADS = 4;

type StructureFramesCanvasProps = { progress: MotionValue<number> };

export function StructureFramesCanvas({ progress }: StructureFramesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const decodedRef = useRef(new Map<number, HTMLImageElement>());
  const loadingRef = useRef(new Set<number>());
  const queueRef = useRef(new Set<number>());
  const mountedRef = useRef(false);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.round(width * dpr);
    const pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.fillStyle = "#05090d";
    context.fillRect(0, 0, width, height);

    const position = currentRef.current * (FRAME_COUNT - 1);
    const firstIndex = Math.floor(position);
    const secondIndex = Math.min(firstIndex + 1, FRAME_COUNT - 1);
    const blend = position - firstIndex;
    const first = decodedRef.current.get(firstIndex);
    const second = decodedRef.current.get(secondIndex);
    const visible = first ?? second;
    if (!visible) return;

    const paintContain = (image: HTMLImageElement, opacity: number) => {
      // Keep the frame's full composition visible, as with SVG preserveAspectRatio="meet".
      const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      context.globalAlpha = opacity;
      context.drawImage(
        image,
        (width - drawWidth) / 2,
        (height - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );
    };

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    paintContain(visible, 1);
    if (first && second && first !== second) paintContain(second, blend);
    context.globalAlpha = 1;
  }, []);

  const requestDraw = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      drawFrame();
    });
  }, [drawFrame]);

  const preloadAround = useCallback((center: number) => {
    const decoded = decodedRef.current;
    const loading = loadingRef.current;
    const queue = queueRef.current;
    const desired = new Set<number>();

    for (let offset = 0; offset <= PRELOAD_RADIUS; offset += 1) {
      const candidates = offset === 0 ? [center] : [center + offset, center - offset];
      for (const frame of candidates) {
        if (frame < 0 || frame >= FRAME_COUNT) continue;
        desired.add(frame);
        if (!decoded.has(frame) && !loading.has(frame)) queue.add(frame);
      }
    }

    for (const frame of [...queue]) if (!desired.has(frame)) queue.delete(frame);
    for (const frame of [...decoded.keys()]) {
      if (Math.abs(frame - center) > PRELOAD_RADIUS + 1) decoded.delete(frame);
    }

    const loadNext = () => {
      if (!mountedRef.current) return;
      while (loading.size < MAX_PARALLEL_LOADS && queue.size > 0) {
        const frame = [...queue].sort((a, b) => Math.abs(a - center) - Math.abs(b - center))[0];
        queue.delete(frame);
        loading.add(frame);

        const image = new Image();
        image.decoding = "async";
        image.onload = () => {
          loading.delete(frame);
          if (!mountedRef.current) return;
          decoded.set(frame, image);
          requestDraw();
          loadNext();
        };
        image.onerror = () => {
          loading.delete(frame);
          loadNext();
        };
        image.src = `/frames/estrutura/frames/frame_${String(frame + 1).padStart(5, "0")}.webp`;
      }
    };
    loadNext();
  }, [requestDraw]);

  useEffect(() => {
    mountedRef.current = true;
    preloadAround(0);
    const canvas = canvasRef.current;
    const resizeObserver = canvas && typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(requestDraw)
      : null;
    if (canvas) resizeObserver?.observe(canvas);

    return () => {
      mountedRef.current = false;
      resizeObserver?.disconnect();
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      decodedRef.current.clear();
      loadingRef.current.clear();
      queueRef.current.clear();
    };
  }, [preloadAround, requestDraw]);

  useMotionValueEvent(progress, "change", (value) => {
    targetRef.current = Math.max(0, Math.min(1, value));
    preloadAround(Math.round(targetRef.current * (FRAME_COUNT - 1)));

    if (rafRef.current !== null) return;
    const animate = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.2;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0005) {
        currentRef.current = targetRef.current;
        rafRef.current = null;
        drawFrame();
        return;
      }
      drawFrame();
      rafRef.current = window.requestAnimationFrame(animate);
    };
    rafRef.current = window.requestAnimationFrame(animate);
  });

  return (
    <canvas
      ref={canvasRef}
      aria-label="Animação da estrutura de eventos controlada pelo scroll"
      className="absolute inset-0 h-full w-full"
    />
  );
}
