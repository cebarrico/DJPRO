"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    number: "01",
    title: "DJ para eventos",
    description: "Performance musical para festas, aniversários, confraternizações e eventos particulares.",
    image: "/images/services/dj-performance.webp",
    imageAlt: "Controladora de DJ profissional e fones de ouvido",
  },
  {
    number: "02",
    title: "Som profissional",
    description: "Equipamentos de áudio adequados para entregar presença e qualidade sonora ao evento.",
    image: "/images/services/som-profissional.webp",
    imageAlt: "Caixa de som profissional em estrutura de palco",
  },
  {
    number: "03",
    title: "Iluminação",
    description: "Iluminação para criar atmosfera, movimento e personalidade em cada evento.",
    image: "/images/services/iluminacao.webp",
    imageAlt: "Refletores de palco com feixes de luz azul",
  },
  {
    number: "04",
    title: "Locação de equipamentos",
    description: "Equipamentos de som e estrutura disponíveis para locação.",
    image: "/images/services/locacao.webp",
    imageAlt: "Cases profissionais de transporte para equipamentos de eventos",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cardParallax = useTransform(scrollYProgress, [0, 1], [9, -9]);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative overflow-hidden bg-[#07090d] px-5 pb-20 pt-20 sm:px-10 sm:pb-16 sm:pt-16 lg:px-16"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-0 h-[32rem] w-[30rem] rounded-full bg-[#72e5ef]/[.035] blur-[100px]" />
      <div className="relative mx-auto max-w-[1460px]">
        <div className="relative mb-8 sm:mb-9">
          <div className="lg:pl-[52px]">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease }}
              className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.28em] text-white/70"
            >
              <span className="h-px w-7 bg-[#72e5ef]" />
              Serviços <span className="font-mono text-[#72e5ef]">/ 01</span>
            </motion.p>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="max-w-[820px] font-display text-[clamp(2.35rem,5.5vw,4.7rem)] font-medium leading-[.97] tracking-[-.065em] text-white [text-wrap:balance]"
            >
              Som que transforma<br className="hidden sm:block" /> qualquer <span className="text-[#72e5ef]">evento.</span>
            </motion.h2>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              className="mt-4 max-w-[450px] text-sm leading-6 text-[#aeb7c0] sm:mt-5 sm:text-base sm:leading-7"
            >
              Da música à estrutura, tudo pensado para criar uma experiência marcante.
            </motion.p>
          </div>

          <div className="pointer-events-none absolute right-0 top-1 hidden items-start gap-12 lg:flex">
            <div className="pt-4 text-[9px] font-medium uppercase leading-[2.1] tracking-[.3em] text-[#aeb7c0]/65">
              Música<br />Experiência<br />Estrutura<br />Resultados
              <span className="mt-4 block h-px w-12 bg-white/35" />
            </div>
            <span className="font-display text-[150px] font-light leading-[.8] tracking-[-.08em] text-transparent [-webkit-text-stroke:1px_rgba(148,163,184,0.13)] xl:text-[176px]">01</span>
          </div>
        </div>

        <motion.div style={reduceMotion ? undefined : { y: cardParallax }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-[18px]"
          >
            {services.map((service) => (
              <motion.article
                key={service.number}
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 14, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.75, ease },
                  },
                }}
                whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.45, ease } }}
                className="service-shell group relative min-h-[224px] overflow-hidden rounded-[15px]"
              >
                <div className="service-core relative flex min-h-[222px] items-center overflow-hidden rounded-[14px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 730px"
                    className="service-image object-cover object-center brightness-[.72] saturate-[.78] transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035] group-hover:translate-x-1"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,.98)_0%,rgba(7,9,13,.91)_35%,rgba(7,9,13,.66)_56%,rgba(7,9,13,.16)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(5,8,12,.38),transparent_55%,rgba(5,8,12,.1))]" />

                  <div className="relative z-[1] w-[68%] px-5 py-9 sm:w-[62%] sm:px-7 lg:w-[58%] lg:px-9 max-md:w-[78%]">
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-[-.045em] text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[365px] text-[13px] leading-[1.55] text-[#c0c8d0] sm:text-base sm:leading-[1.55]">
                      {service.description}
                    </p>
                  </div>

                  <span className="absolute bottom-7 left-5 z-[1] h-[2px] w-10 origin-left scale-x-75 bg-[#35d8ea] opacity-75 transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 group-hover:opacity-100 group-hover:shadow-[0_0_9px_rgba(53,216,234,.32)] sm:left-7 lg:left-9" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
