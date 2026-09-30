"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      aria-labelledby="about-title"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#02080d] text-white lg:h-[100dvh] lg:min-h-[720px]"
    >
      <motion.div
        className="about-background absolute inset-0 -inset-y-[2%] z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/about/sobrebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "54% center",
          y: reduceMotion ? 0 : imageY,
        }}
        initial={false}
      />

      {/* Dark falloff keeps the supplied image full-bleed while preserving legibility. */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(1,7,11,.97)_0%,rgba(1,7,11,.91)_24%,rgba(1,7,11,.70)_39%,rgba(1,7,11,.15)_67%,rgba(1,7,11,.16)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(1,7,11,.93)_0%,rgba(1,7,11,.84)_42%,rgba(1,7,11,.42)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.14] [background-image:linear-gradient(rgba(19,202,226,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(19,202,226,.18)_1px,transparent_1px)] [background-size:112px_112px] [mask-image:linear-gradient(90deg,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[11%] z-10 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-300/10 to-transparent" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1800px] items-center px-6 pb-24 pt-28 sm:px-10 lg:h-full lg:min-h-0 lg:px-[5.9vw] lg:pb-20 lg:pt-16">
        <motion.div
          className="w-full max-w-[570px]"
          initial={reduceMotion ? false : { opacity: 0, x: -24, y: 8 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300 sm:mb-9 sm:text-xs">
            <span className="h-px w-12 bg-cyan-400" />
            <span>Sobre</span>
            <span className="text-white/50">/</span>
            <span>05</span>
          </div>

          <h2
            id="about-title"
            className="max-w-[570px] text-[clamp(2.8rem,5.15vw,5.55rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-white"
          >
            Mais do que
            <br />
            música.
            <br />
            Uma <span className="text-cyan-400">experiência.</span>
          </h2>

          <motion.p
            className="mt-6 max-w-[500px] text-[15px] leading-[1.52] text-slate-200/85 sm:mt-7 sm:text-[18px]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Cada evento tem uma energia única. O objetivo é entender o momento,
            o público e o ambiente para criar uma experiência musical que faça
            sentido para cada ocasião.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center gap-3 sm:mt-7"
            initial={
              reduceMotion ? false : { scaleX: 0, transformOrigin: "left" }
            }
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.23, ease: "easeOut" }}
          >
            <span className="h-[2px] w-14 bg-cyan-400" />
          </motion.div>

          <motion.p
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.34em] text-white/85 sm:mt-5 sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            DJ <span className="px-2 text-cyan-300">•</span> EXPERIÊNCIA{" "}
            <span className="px-2 text-cyan-300">•</span> SOM{" "}
            <span className="px-2 text-cyan-300">•</span> CONEXÃO
          </motion.p>

          <motion.a
            href="mailto:contato@sompro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
            className="reference-button reference-button-cyan group relative mt-8 flex min-h-[82px] w-full max-w-[470px] items-center justify-between border border-cyan-400/70 bg-[#02090e]/40 px-4 py-3 transition-colors duration-300 hover:bg-cyan-400/[0.06] sm:mt-10 sm:min-h-[84px] sm:px-[18px] max-md:mt-6 max-md:min-h-[74px] max-md:px-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.34 }}
          >
            <span className="absolute left-0 top-0 h-px w-7 bg-cyan-300" />
            <span className="absolute bottom-0 right-0 h-px w-7 bg-cyan-300" />
            <span className="flex flex-col gap-1.5">
              <span className="text-[9px] font-medium uppercase tracking-[0.29em] text-slate-300/85 sm:text-[10px]">
                Vamos criar o próximo momento?
              </span>
              <span className="text-[18px] tracking-[-0.025em] text-white sm:text-[21px] max-md:text-[15px]">
                Solicitar orçamento
              </span>
            </span>
            <span
              aria-hidden="true"
              className="ml-4 text-[27px] leading-none text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 max-md:ml-2 max-md:text-[22px]"
            >
              →
            </span>
            <span className="absolute bottom-[7px] left-[18px] right-[18px] h-[2px] bg-cyan-400/35">
              <span className="block h-full w-[64%] bg-cyan-400 transition-[width] duration-500 group-hover:w-full" />
            </span>
          </motion.a>
        </motion.div>

        <div className="pointer-events-none absolute right-6 top-8 hidden w-[190px] text-[9px] uppercase tracking-[0.25em] text-white/65 sm:right-10 sm:top-10 lg:block">
          <div className="border border-cyan-400/35 px-3 py-3 text-[11px] tracking-[0.3em] text-white/90">
            05 <span className="text-cyan-300">/</span> 06
          </div>
          <p className="mt-3 leading-[1.8]">
            Música que
            <br />
            conecta pessoas
          </p>
          <span className="mt-4 block h-24 w-px bg-gradient-to-b from-cyan-300/40 to-transparent" />
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-right text-[9px] leading-[2.7] tracking-[0.32em] text-white/45 lg:block xl:right-10">
          EVENTOS
          <br />
          EXPERIÊNCIAS
          <br />
          PESSOAS
          <br />
          HISTÓRIAS
          <br />
          MÚSICA
          <span className="ml-auto mt-3 block h-20 w-px bg-cyan-300/35" />
        </div>

        <div className="pointer-events-none absolute bottom-7 left-6 flex items-center gap-4 text-[10px] font-medium tracking-[0.28em] text-cyan-300 sm:left-10 lg:left-[5.9vw]">
          <span>05</span>
          <span className="h-[3px] w-16 bg-cyan-400" />
          <span>06</span>
        </div>
        <div className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-4 text-[9px] tracking-[0.3em] text-white/55 sm:right-10 md:flex">
          <span className="h-px w-20 bg-cyan-300/30" />
          <span>CRIANDO EXPERIÊNCIAS ATRAVÉS DA MÚSICA</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
