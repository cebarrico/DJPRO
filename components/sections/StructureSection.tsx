"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { StructureFramesCanvas } from "@/components/sections/StructureFramesCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    number: "01",
    title: "SOM",
    description: "Equipamentos de áudio profissionais para diferentes tamanhos de evento.",
  },
  {
    number: "02",
    title: "ILUMINAÇÃO",
    description: "Iluminação para criar atmosfera, presença e movimento.",
  },
  {
    number: "03",
    title: "LOCAÇÃO",
    description: "Equipamentos disponíveis para locação, de acordo com a necessidade do evento.",
  },
];

export function StructureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const blueprintY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      id="estrutura"
      className="relative h-[210dvh] bg-[#05090d] max-md:h-[190svh]"
    >
      <div className="sticky top-0 isolate h-[100dvh] overflow-hidden bg-[#05090d] px-4 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 max-md:h-[100svh] max-md:px-3 max-md:py-6">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.18] [background-image:linear-gradient(rgba(40,145,164,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(40,145,164,.13)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(180deg,black,transparent_92%)]" />
      <div className="pointer-events-none absolute -right-36 top-10 -z-10 h-[35rem] w-[35rem] rounded-full bg-[#007894]/[.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4acddd]/20 to-transparent" />

      <div className="mx-auto max-w-[1660px]">
        <div className="grid items-center gap-8 max-md:gap-3 lg:grid-cols-[minmax(290px,.76fr)_minmax(0,2fr)] lg:gap-2 xl:grid-cols-[minmax(340px,.8fr)_minmax(0,2fr)]">
          <div className="relative z-[1] max-w-[560px] pb-2 lg:pb-16">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 9 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, ease }}
              className="mb-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[.3em] text-white/70 sm:text-[11px] max-md:mb-2 max-md:gap-3"
            >
              <span className="h-px w-12 bg-gradient-to-r from-[#42d9e8] to-[#42d9e8]/25" />
              Estrutura <span className="text-white/40">/</span>
              <span className="font-mono text-[#72e5ef]">03</span>
            </motion.p>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.38 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="font-display text-[clamp(2.7rem,5.2vw,5.2rem)] font-medium leading-[.96] tracking-[-.067em] text-white [text-wrap:balance] max-md:text-[clamp(2rem,9vw,2.55rem)]"
            >
              Estrutura que faz a <span className="text-[#72e5ef]">diferença.</span>
            </motion.h2>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.38 }}
              transition={{ duration: 0.78, delay: 0.17, ease }}
              className="mt-5 max-w-[420px] text-sm leading-6 text-[#c1cbd4] sm:text-base sm:leading-7 max-md:mt-2 max-md:text-xs max-md:leading-[1.4]"
            >
              Som, iluminação e equipamentos profissionais para entregar presença e qualidade em cada evento.
            </motion.p>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, scaleX: 0.35 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-7 block h-[2px] w-12 origin-left bg-[#39d9e8] max-md:mt-3"
            />
          </div>

          <motion.div
            style={reduceMotion ? undefined : { y: blueprintY }}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 1.05, ease }}
            className="relative -mx-4 aspect-[1.48] min-h-[270px] sm:mx-0 sm:aspect-[1.82] sm:min-h-[360px] lg:-ml-14 lg:aspect-[1.96] lg:min-h-[390px] xl:-ml-20 xl:min-h-[440px] max-md:mx-0 max-md:aspect-[2.05] max-md:min-h-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_48%,rgba(10,94,117,.18),transparent_64%)]" />
            <StructureFramesCanvas progress={scrollYProgress} />
            <div className="pointer-events-none absolute inset-x-4 bottom-2 flex items-center justify-between border-t border-[#3eb7c7]/20 pt-2 font-mono text-[7px] uppercase tracking-[.2em] text-[#b8dce1]/45 sm:inset-x-2 sm:text-[8px]">
              <span>PLANTA TÉCNICA · STAGE 06 × 03 M</span>
              <span>ESCALA 1:50</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-3.5 lg:mt-8 lg:gap-4 max-md:mt-2 max-md:grid-cols-2 max-md:gap-2"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              variants={{
                hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.78, ease } },
              }}
              className={`group relative min-h-[148px] overflow-hidden border border-[#58cdd8]/20 bg-[#071017]/55 px-5 py-5 transition-[border-color,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#58dcea]/55 hover:bg-[#08151c]/75 sm:min-h-[164px] sm:px-6 sm:py-6 max-md:min-h-[96px] max-md:px-2.5 max-md:py-2 ${index === 2 ? "max-md:col-span-2 max-md:min-h-[76px]" : ""}`}
            >
              <span className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r border-t border-[#63dce8]/25 transition-colors duration-500 group-hover:border-[#63dce8]/70" />
              <div className="flex items-center gap-3 max-md:gap-2">
                <span className="font-display text-[36px] font-light leading-none tracking-[-.07em] text-[#b8c8ce]/65 sm:text-[40px] max-md:text-[25px]">{feature.number}</span>
                <span className="h-px w-9 bg-[#54dbe7] max-md:w-6" />
              </div>
              <h3 className="mt-4 text-[11px] font-semibold tracking-[.2em] text-white sm:text-xs max-md:mt-1 max-md:text-[10px]">{feature.title}</h3>
              <p className="mt-2 max-w-[340px] text-[12px] leading-[1.55] text-[#aebdc5] sm:text-[13px] max-md:mt-0.5 max-md:text-[10px] max-md:leading-[1.35]">{feature.description}</p>
              <span className="absolute bottom-0 left-0 h-px w-12 bg-[#45d9e7]/75 transition-[width] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/[.09] pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6 max-md:mt-2 max-md:flex-row max-md:items-center max-md:justify-between max-md:gap-3 max-md:pt-2">
          <div className="flex items-center gap-3 font-mono text-[9px] font-medium tracking-[.28em] text-[#72e5ef]">
            <span>03</span>
            <span className="h-px w-[72px] bg-gradient-to-r from-[#4bdeeb] to-white/20 max-md:w-8" />
            <span>06</span>
          </div>
          <motion.a
            href="mailto:contato@sompro.com.br?subject=Loca%C3%A7%C3%A3o%20de%20equipamentos"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease }}
            className="reference-button reference-button-structure group flex w-full flex-col border border-[#49cedd]/30 bg-[#071017]/45 px-5 py-4 transition-colors duration-500 hover:border-[#49cedd]/65 sm:w-auto sm:min-w-[440px] sm:px-6 max-md:w-auto max-md:max-w-[245px] max-md:px-3 max-md:py-2"
          >
            <span className="text-[8px] font-medium uppercase tracking-[.26em] text-[#91a9b1] max-md:text-[6px]">Precisa apenas da estrutura?</span>
            <span className="mt-2 flex items-center justify-between gap-4 text-sm font-medium text-white sm:text-[15px] max-md:mt-1 max-md:gap-2 max-md:text-[10px]">
              Alugue os equipamentos para o seu evento
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#5adce8]/25 text-[#72e5ef] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:border-[#5adce8]/60 group-hover:bg-[#4dd9e9]/[.08]" aria-hidden="true">→</span>
            </span>
          </motion.a>
        </div>
      </div>
      </div>
    </section>
  );
}
