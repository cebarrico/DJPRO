"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/events/dj-live.webp",
    alt: "DJ tocando diante de um grande público em um evento noturno",
    className: "col-span-2 aspect-[1.38] md:aspect-[1.8] lg:col-span-1 lg:row-span-2 lg:aspect-auto",
    desktopPlacement: "lg:col-start-1 lg:row-start-1",
  },
  {
    src: "/images/events/aniversarios.webp",
    alt: "Público comemorando em uma pista com luzes e efeitos de palco",
    className: "aspect-[.98] lg:aspect-auto",
    desktopPlacement: "lg:col-start-2 lg:row-start-1",
  },
  {
    src: "/images/services/dj-performance.webp",
    alt: "Controladora de DJ e fones em um ambiente de evento iluminado",
    className: "aspect-[.98] lg:aspect-auto",
    desktopPlacement: "lg:col-start-2 lg:row-start-2",
  },
  {
    src: "/images/events/particulares.webp",
    alt: "Pista de evento particular sob iluminação cênica",
    className: "col-span-2 aspect-[.82] md:col-span-1 md:row-span-2 md:aspect-auto lg:col-span-1 lg:row-span-3",
    desktopPlacement: "lg:col-start-3 lg:row-start-1",
  },
  {
    src: "/images/events/confraternizacoes.webp",
    alt: "Espaço de confraternização preparado para uma celebração",
    className: "aspect-[1.2] lg:aspect-auto",
    desktopPlacement: "lg:col-start-1 lg:row-start-3",
  },
  {
    src: "/images/events/casamentos.webp",
    alt: "Casal dançando em uma recepção de casamento iluminada",
    className: "aspect-[1.2] lg:aspect-auto",
    desktopPlacement: "lg:col-start-2 lg:row-start-3",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function GallerySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="galeria"
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-[#05090d] px-5 py-12 sm:px-8 sm:py-14 lg:flex lg:flex-col lg:justify-center lg:px-[4.2vw] lg:py-10 max-md:min-h-[100svh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.16] [background-image:linear-gradient(rgba(40,145,164,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(40,145,164,.13)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(180deg,black,transparent_94%)]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-10rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#007894]/[.09] blur-[135px]" />

      <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(310px,.72fr)_minmax(0,2fr)] lg:gap-[3.2vw]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease }}
          className="relative max-w-[540px] lg:pr-3"
        >
          <p className="mb-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[.3em] text-[#72e5ef] sm:text-[11px]">
            <span className="h-px w-12 bg-gradient-to-r from-[#42d9e8] to-[#42d9e8]/25" />
            Galeria <span className="text-white/45">/</span>
            <span className="font-mono">04</span>
          </p>
          <h2 className="font-display text-[clamp(2.65rem,5.1vw,5rem)] font-medium leading-[.94] tracking-[-.067em] text-white [text-wrap:balance]">
            Momentos que merecem ser <span className="text-[#72e5ef]">vividos.</span>
          </h2>
          <p className="mt-5 max-w-[410px] text-sm leading-6 text-[#c1cbd4] sm:text-base sm:leading-7">
            Cada evento tem uma energia diferente. A música transforma o ambiente, e cada momento fica na memória.
          </p>
          <span className="mt-7 block h-[2px] w-12 bg-[#39d9e8]" />
          <div className="pointer-events-none mt-8 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.22em] text-[#a7c6ce]/50 lg:flex">
            <span className="h-px w-8 bg-[#55dce8]/55" />
            Registro de momentos · 2024—26
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.075 } } }}
          className="grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:h-[min(70dvh,720px)] lg:min-h-[530px] lg:grid-cols-[minmax(0,1.22fr)_minmax(0,.68fr)_minmax(0,.52fr)] lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,.9fr)] lg:gap-3.5"
        >
          {galleryImages.map((item, index) => (
            <motion.figure
              key={item.src}
              variants={{
                hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              className={`group relative min-w-0 overflow-hidden rounded-[5px] border border-[#52cad8]/30 bg-[#071017] ${item.className} ${index === 3 ? "gallery-portrait" : ""} ${item.desktopPlacement}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 45vw"
                priority={index === 0}
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035]"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,11,.02),transparent_58%,rgba(3,7,11,.28))]" />
              <span className="pointer-events-none absolute inset-0 border border-white/[.035] transition-colors duration-700 group-hover:border-[#72e5ef]/35" />
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <div className="mt-7 flex flex-col gap-5 border-t border-white/[.09] pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6 lg:mt-6">
        <div className="flex items-center gap-3 font-mono text-[9px] font-medium tracking-[.28em] text-[#72e5ef]">
          <span>04</span>
          <span className="h-px w-[72px] bg-gradient-to-r from-[#4bdeeb] to-white/20" />
          <span>06</span>
        </div>
        <a
          href="mailto:contato@sompro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
          className="reference-button reference-button-structure group flex w-full flex-col border border-[#49cedd]/30 bg-[#071017]/45 px-5 py-4 transition-colors duration-500 hover:border-[#49cedd]/65 sm:w-auto sm:min-w-[360px] sm:px-6"
        >
          <span className="text-[8px] font-medium uppercase tracking-[.26em] text-[#91a9b1]">Quer viver essa experiência?</span>
          <span className="mt-2 flex items-center justify-between gap-4 text-sm font-medium text-white sm:text-[15px]">
            Solicitar orçamento
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#5adce8]/25 text-[#72e5ef] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:border-[#5adce8]/60 group-hover:bg-[#4dd9e9]/[.08]" aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </section>
  );
}
