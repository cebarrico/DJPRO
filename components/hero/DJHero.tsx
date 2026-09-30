"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { DJHeroCanvas } from "@/components/hero/DJHeroCanvas";
import { DJNavbar } from "@/components/hero/DJNavbar";
import { HeroSocialRail } from "@/components/hero/HeroSocialRail";

export function DJHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Apresentação"
      className="relative h-[210dvh] bg-[#07090d] max-md:h-[190svh]"
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden max-md:h-[100svh]">
        <DJHeroCanvas progress={scrollYProgress} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,11,.34),transparent_31%,rgba(4,7,11,.08)_62%,rgba(4,7,11,.52)),linear-gradient(90deg,rgba(4,7,11,.24),transparent_58%)]" />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

        <HeroSocialRail />

        <div
          id="inicio"
          className="absolute inset-x-0 top-[23%] mx-auto max-w-[1760px] scroll-mt-8 px-5 sm:top-[24%] sm:px-16 lg:px-[11vw]"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[475px]"
          >
            <p className="mb-4 flex scale-[1.12] origin-top-left items-center gap-2 text-[8px] font-medium uppercase tracking-[.25em] text-white/65 sm:mb-5 sm:gap-3 sm:text-[10px] sm:tracking-[.3em]">
              <span className="h-px w-5 shrink-0 bg-[#72e5ef]/80 sm:w-7" /> DJ{" "}
              <span className="text-[#72e5ef]">•</span> SOM{" "}
              <span className="text-[#72e5ef]">•</span> ILUMINAÇÃO{" "}
              <span className="text-[#72e5ef]">•</span> LOCAÇÃO
            </p>
            <h1 className="origin-top-left scale-[1.1] font-display text-[clamp(3rem,6vw,5.2rem)] font-semibold uppercase leading-[.9] tracking-[-.075em] text-white [text-shadow:0_2px_35px_rgba(0,0,0,.45)]">
              DJ <span className="text-[#72e5ef]">[NOME]</span>
            </h1>
            <p className="mt-4 max-w-[320px] origin-top-left scale-[1.1] text-[13px] leading-[1.55] text-white/80 sm:mt-5 sm:text-base sm:leading-7">
              Som, energia e experiência para o seu evento.
            </p>
            <a
              href="mailto:contato@sompro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
              className="reference-button reference-button-ice group origin-top-left mt-6 inline-flex [transform:scale(1.1)] items-center gap-3 rounded-full border border-[#72e5ef]/55 bg-[#080c10]/25 py-1.5 pl-5 pr-1.5 text-[11px] font-medium tracking-[.04em] text-white shadow-[0_0_18px_rgba(49,201,231,.06)] transition-[transform,border-color,background-color,box-shadow] duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#72e5ef] hover:bg-[#111a20]/70 hover:shadow-[0_0_22px_rgba(49,201,231,.13)] active:scale-[.98] sm:mt-7 sm:text-xs"
            >
              Solicitar orçamento
              <span className="flex h-8 w-8 scale-110 items-center justify-center rounded-full bg-white/[.07] text-[#a7f2fa] transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute right-5 top-[48%] hidden -translate-y-1/2 [writing-mode:vertical-rl] sm:block lg:right-10 scale-150">
          <span className="mb-4 inline-block h-7 w-px bg-white/25" />
          <span className="scale-[1.12] text-[8px] font-medium uppercase tracking-[.34em] text-white/45">
            Música que conecta pessoas
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-5 bottom-[12%] hidden items-end justify-between sm:flex lg:inset-x-12 ">
          <div className="flex origin-bottom-left scale-150 items-center gap-3 text-[8px] font-medium uppercase leading-[1.65] tracking-[.28em] text-white/45">
            <svg
              viewBox="0 0 76 24"
              fill="none"
              className="h-6 w-[68px] text-[#72e5ef]/55"
              aria-hidden="true"
            >
              <path
                d="M1 12h3l2-4 3 9 3-14 3 18 3-12 3 7 3-4h4l3-8 3 16 3-13 3 8 3-6h4l3-5 3 12 3-9 3 5 3-3h4l2-5 3 10 2-5h4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Música
              <br />
              Experiência
              <br />
              Conexão
            </span>
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5">
            <span className="relative flex h-11 w-[19px] origin-bottom scale-110 justify-center rounded-full border border-white/60 p-[4px]">
              <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-[#c4faff] shadow-[0_0_8px_rgba(114,229,239,.75)]" />
            </span>
            <span className="scale-[1.12] whitespace-nowrap text-[8px] font-medium uppercase tracking-[.34em] text-white/55">
              Role para explorar
            </span>
          </div>

          <div className="flex origin-bottom-right  items-start gap-3 text-right text-[8px] font-medium uppercase leading-[1.65] tracking-[.28em] text-white/45 scale-150">
            <span className="mt-2 h-px w-10 bg-white/40" />
            <span>
              Transformando
              <br />
              eventos em
              <br />
              histórias
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[6.5%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 sm:hidden">
          <span className="relative flex h-9 w-[17px] origin-bottom scale-110 justify-center rounded-full border border-white/55 p-[4px]">
            <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-[#c4faff] shadow-[0_0_8px_rgba(114,229,239,.75)]" />
          </span>
          <span className="scale-[1.12] whitespace-nowrap text-[7px] font-medium uppercase tracking-[.28em] text-white/55">
            Role para explorar
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[8px] font-mono tracking-[.18em] text-white/35 sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2">
          <span className="h-px w-4 bg-[#9c8bff]/70 sm:hidden" />
          <span className="origin-left scale-[1.12] sm:hidden">
            SCROLL / 01 — 02
          </span>
          <span className="hidden origin-center scale-[1.12] sm:inline">
            INTERAÇÃO / 01 — 02
          </span>
        </div>
      </div>
    </section>
  );
}
