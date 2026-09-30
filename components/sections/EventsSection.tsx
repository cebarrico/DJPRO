"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EventsFramesCanvas } from "@/components/sections/EventsFramesCanvas";

const events = [
  {
    number: "01",
    title: "Aniversários",
    description: "Música que acompanha cada momento.",
    image: "/images/events/aniversarios.webp",
    alt: "Público celebrando em uma pista de dança iluminada",
  },
  {
    number: "02",
    title: "Confraternizações",
    description: "Energia e boa música para unir sua equipe.",
    image: "/images/events/confraternizacoes.webp",
    alt: "Confraternização em um espaço de eventos acolhedor",
  },
  {
    number: "03",
    title: "Casamentos",
    description: "Trilhas sonoras para dias inesquecíveis.",
    image: "/images/events/casamentos.webp",
    alt: "Casal dançando sob luzes quentes em uma recepção",
  },
  {
    number: "04",
    title: "Eventos particulares",
    description: "Experiências exclusivas do seu jeito.",
    image: "/images/events/particulares.webp",
    alt: "Pista de evento particular com iluminação cênica",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [14, -14]);

  const activateRelative = (step: number) => {
    setActiveIndex((current) => (current + step + events.length) % events.length);
  };

  return (
    <section
      ref={sectionRef}
      id="eventos"
      className="relative h-[210dvh] bg-[#06090d] max-md:h-[190svh]"
    >
      <div className="sticky top-0 isolate h-[100dvh] overflow-hidden bg-[#06090d] px-5 pb-8 pt-16 sm:px-10 sm:pb-10 sm:pt-20 lg:px-16 max-md:h-[100svh] max-md:px-3 max-md:pb-4 max-md:pt-11">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.16] [background-image:linear-gradient(rgba(67,151,181,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(67,151,181,.11)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(180deg,black,transparent_88%)]" />
      <div className="pointer-events-none absolute -left-48 top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0b6a91]/[.09] blur-[130px]" />

      <div className="relative mx-auto max-w-[1460px] max-md:w-full">
        <div className="relative min-h-[530px] overflow-hidden rounded-[2px] sm:min-h-[570px] lg:min-h-[620px] max-md:min-h-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="absolute inset-0 -top-5 max-md:inset-x-0 max-md:top-0 max-md:bottom-auto max-md:h-[36svh]"
          >
            <motion.div style={reduceMotion ? undefined : { y: imageY }} className="absolute inset-0">
              <EventsFramesCanvas progress={scrollYProgress} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#06090d_0%,rgba(6,9,13,.96)_16%,rgba(6,9,13,.76)_37%,rgba(6,9,13,.12)_72%,rgba(6,9,13,.25)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,#06090d_0%,rgba(6,9,13,.76)_12%,transparent_48%,rgba(6,9,13,.30)_100%)]" />
              <div className="absolute inset-0 border border-white/[.06]" />
            </motion.div>
          </motion.div>

          <div className="relative z-10 grid min-h-[530px] grid-cols-1 content-start pt-10 sm:min-h-[570px] sm:pt-14 lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_auto] lg:pt-[72px] max-md:min-h-0 max-md:pt-7">
            <div className="max-w-[620px] lg:ml-[10px]">
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease }}
                className="mb-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[.3em] text-white/75 sm:text-[11px] max-md:mb-3 max-md:gap-3"
              >
                <span className="h-px w-12 bg-gradient-to-r from-[#72e5ef] to-[#72e5ef]/30" />
                Eventos <span className="text-white/45">/</span>
                <span className="font-mono text-[#72e5ef]">02</span>
              </motion.p>
              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 15, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, delay: 0.08, ease }}
                className="max-w-[590px] font-display text-[clamp(2.7rem,6.2vw,5.35rem)] font-medium leading-[.94] tracking-[-.067em] text-white [text-wrap:balance] max-md:text-[clamp(2rem,8.8vw,2.5rem)]"
              >
                Cada evento<br className="hidden sm:block" /> tem seu <span className="text-[#72e5ef]">ritmo.</span>
              </motion.h2>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.17, ease }}
                className="mt-5 max-w-[420px] text-sm leading-6 text-[#c1cbd4] sm:mt-6 sm:text-base sm:leading-7 max-md:mt-3 max-md:text-xs max-md:leading-[1.4]"
              >
                Do aniversário à confraternização, criamos a atmosfera certa para cada momento.
              </motion.p>
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, scaleX: 0.4 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3, ease }}
                className="mt-7 block h-[2px] w-12 origin-left bg-[#36d9eb] max-md:mt-4"
              />
            </div>

            <div className="pointer-events-none absolute right-2 top-6 hidden items-start gap-10 lg:flex xl:right-3">
              <p className="pt-1 text-[9px] font-medium uppercase leading-[2.15] tracking-[.29em] text-white/60">
                Música<br />Pessoas<br />Momentos<br />Histórias
                <span className="mt-4 block h-px w-10 bg-white/45" />
              </p>
              <span className="font-display text-[145px] font-light leading-[.8] tracking-[-.08em] text-transparent [-webkit-text-stroke:1px_rgba(148,163,184,0.14)] xl:text-[170px]">02</span>
            </div>
          </div>

          <div className="relative z-10 -mt-[76px] grid grid-cols-1 gap-3 sm:-mt-[86px] sm:grid-cols-2 sm:gap-3.5 lg:-mt-[104px] lg:grid-cols-4 lg:gap-3 max-md:-mt-4 max-md:grid-cols-2 max-md:gap-2">
            {events.map((event, index) => (
              <motion.button
                key={event.number}
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                initial={reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.72, delay: reduceMotion ? 0 : index * 0.1, ease }}
                whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.38, ease } }}
                className={`group relative min-h-[250px] overflow-hidden rounded-[6px] border text-left transition-[border-color,box-shadow,background-color] duration-500 sm:min-h-[267px] max-md:min-h-[160px] ${
                  activeIndex === index
                    ? "border-[#42ddeb]/80 shadow-[0_0_18px_rgba(43,209,230,.08)]"
                    : "border-white/[.11] hover:border-[#42ddeb]/65"
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 365px"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.045]"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,11,.04)_5%,rgba(3,7,11,.20)_36%,rgba(3,7,11,.94)_100%)]" />
                <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,11,.22),transparent_80%)]" />
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#43deed] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="absolute bottom-5 left-4 right-4 flex items-end gap-4 sm:bottom-6 sm:left-5 sm:right-5 max-md:bottom-3 max-md:left-2 max-md:right-2 max-md:gap-2">
                  <span className="flex w-[52px] shrink-0 flex-col items-start max-md:w-8">
                    <span className="font-display text-[38px] font-light leading-none tracking-[-.07em] text-white/55 transition-colors duration-500 group-hover:text-[#72e5ef] max-md:text-[26px]">{event.number}</span>
                    <span className="mt-3 h-[2px] w-8 bg-[#38d9e8] max-md:mt-2 max-md:w-6" />
                  </span>
                  <span className="min-w-0 pb-[1px]">
                    <span className="block font-display text-base font-semibold leading-tight tracking-[-.04em] text-white sm:text-[18px] max-md:text-[13px]">{event.title}</span>
                    <span className="mt-2 block max-w-[230px] text-[12px] leading-[1.5] text-[#c4cdd4] sm:text-[13px] max-md:mt-1 max-md:text-[10px] max-md:leading-[1.3]">{event.description}</span>
                  </span>
                </span>
              </motion.button>
            ))}
          </div>

          <div className="relative z-10 mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 px-1 sm:mt-8 lg:mt-14 max-md:mt-3 max-md:gap-x-3 max-md:gap-y-2">
            <div className="flex items-center gap-3 font-mono text-[9px] font-medium tracking-[.28em] text-[#72e5ef]">
              <span>{events[activeIndex].number}</span>
              <span className="h-px w-[68px] overflow-hidden bg-white/20">
                <span className="block h-px bg-[#43d9e8] transition-[width] duration-500" style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }} />
              </span>
              <span>04</span>
            </div>
            <div className="h-px min-w-8 flex-1 bg-white/[.12]" />
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Evento anterior"
                onClick={() => activateRelative(-1)}
                className="reference-button reference-button-ice hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#72e5ef]/65 hover:text-[#72e5ef] sm:flex"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label="Próximo evento"
                onClick={() => activateRelative(1)}
                className="reference-button reference-button-ice hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#72e5ef]/65 hover:text-[#72e5ef] sm:flex"
              >
                <span aria-hidden="true">→</span>
              </button>
              <a
                href="mailto:contato@sompro.com.br?subject=Vamos%20conversar"
                className="ml-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[.23em] text-[#c9d2d8] transition-colors hover:text-[#72e5ef] sm:ml-3 sm:text-[10px]"
              >
                Dúvidas? <span className="ml-1.5 text-white">Vamos conversar</span>
                <span className="ml-2 text-[#72e5ef]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
