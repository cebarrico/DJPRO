"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const contactItems = [
  {
    title: "WhatsApp",
    detail: "Atendimento rápido",
    href: "https://www.whatsapp.com/",
    icon: "whatsapp",
  },
  {
    title: "Instagram",
    detail: "Acompanhe os eventos",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    title: "E-mail",
    detail: "Envie sua mensagem",
    href: "mailto:contato@sompro.com.br",
    icon: "email",
  },
] as const;

function ContactIcon({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  if (type === "whatsapp") {
    return (
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26.2 15.5a10.2 10.2 0 0 1-15.1 8.9L5 26l1.7-5.8a10.2 10.2 0 1 1 19.5-4.7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M11.4 10.7c.4-.8.8-.8 1.2-.8h.6c.2 0 .5 0 .7.6l.9 2.1c.1.3.1.5-.1.8l-.7.9c-.2.2-.3.4-.1.7.7 1.2 1.7 2.2 3 2.9.3.2.5.1.7-.1l.9-1.1c.2-.3.5-.3.8-.2l2 .9c.3.1.5.3.5.5 0 .4-.2 1.5-1 2-.7.5-1.6.7-2.6.4-1.1-.3-2.5-.9-4.2-2.4-1.4-1.2-2.4-2.7-2.7-3.8-.4-1.1-.1-2.4.1-3.1Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="5"
          width="22"
          height="22"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="23" cy="9" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="7"
        width="25"
        height="18"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5 9 11 9 11-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="contato"
        aria-labelledby="contact-title"
        className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#02080d] text-white lg:h-[100dvh] lg:min-h-[720px]"
      >
        <div
          className="contact-background absolute left-1/2 top-0 z-0 h-full w-[92vw] max-w-[1920px] -translate-x-1/2 overflow-hidden max-md:left-0 max-md:w-full max-md:max-w-none max-md:translate-x-0"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/contacts/contactsbg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.17] [background-image:linear-gradient(rgba(19,202,226,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(19,202,226,.2)_1px,transparent_1px)] [background-size:112px_112px] [mask-image:linear-gradient(90deg,black,transparent_76%)]" />

        <div className="bg-[#02090e]/70 relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col justify-center px-5 pb-12 pt-28 sm:px-9 lg:min-h-0 lg:h-full lg:px-[5.5vw] lg:pb-10 lg:pt-24 ">
          <motion.div
            className="w-full max-w-[760px] lg:w-[47%] "
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={rise}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300 sm:mb-8 sm:text-xs"
            >
              <span className="h-px w-12 bg-cyan-400" />
              <span>Contato</span>
              <span className="text-white/45">/</span>
              <span>06</span>
            </motion.div>

            <motion.h2
              id="contact-title"
              variants={rise}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[820px] text-[clamp(3rem,6.05vw,6.7rem)] font-semibold leading-[0.88] tracking-[-0.067em] text-white"
            >
              Vamos criar algo{" "}
              <span className="text-cyan-400">inesquecível?</span>
            </motion.h2>

            <motion.p
              variants={rise}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[560px] text-[16px] leading-[1.5] text-slate-200/85 sm:mt-7 sm:text-[20px]"
            >
              Seu evento merece música, energia e uma estrutura pensada para
              cada momento.
            </motion.p>

            <motion.p
              variants={rise}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 mt-8 text-[10px] font-medium uppercase tracking-[0.38em] text-white/75 sm:mt-9"
            >
              Fale comigo
            </motion.p>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  variants={rise}
                  transition={{
                    duration: 0.68,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="reference-button reference-button-cyan group flex min-h-[72px] items-center gap-3 border border-cyan-400/35 bg-[#02090e]/70 px-3.5 transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:border-cyan-300/75 hover:bg-cyan-300/[0.04] sm:min-h-[78px] sm:px-3"
                >
                  <ContactIcon
                    type={item.icon}
                    className="h-8 w-8 shrink-0 text-cyan-400 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                  />
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-white sm:text-[16px]">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] text-slate-300/75 sm:text-[12px]">
                      {item.detail}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.a
              variants={rise}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              href="mailto:contato@sompro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
              className="reference-button reference-button-cyan group relative mt-3 flex min-h-[72px] w-full items-center justify-between border border-cyan-400/70 bg-[#02090e]/60 px-5 text-[19px] tracking-[-0.02em] text-white transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-cyan-400/[0.06] sm:mt-4 sm:min-h-[78px] sm:px-6 sm:text-[21px] max-md:min-h-[64px] max-md:px-3 max-md:text-[15px]"
            >
              <span className="absolute left-0 top-0 h-px w-7 bg-cyan-300" />
              <span className="absolute bottom-0 right-0 h-px w-7 bg-cyan-300" />
              Solicitar orçamento
              <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] text-[22px] text-cyan-300 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                →
              </span>
              <span className="absolute bottom-[7px] left-6 right-6 h-[2px] bg-cyan-400/25">
                <span className="block h-full w-[48%] bg-cyan-400 transition-[width] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
              </span>
            </motion.a>

            <motion.p
              variants={rise}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-[15px] text-slate-200/75 sm:mt-3.5 sm:text-[17px]"
            >
              Vamos conversar sobre o seu evento.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <motion.footer
        className="relative w-full border-t border-cyan-400/35 bg-[#02070b] text-white"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto grid min-h-[128px] w-full max-w-[1920px] grid-cols-1 items-center gap-6 px-5 py-7 sm:px-9 lg:grid-cols-[1.35fr_1.2fr_1.1fr_1.1fr] lg:gap-6 lg:px-[5.5vw] lg:py-0">
          <div className="flex items-center gap-4">
            <Image src="/pin.png" alt="DJ WARLEY" width={100} height={100} />
            <span className="h-10 w-px bg-cyan-300/30" />
            <span>
              <span className="font-zen-dots block text-[11px] font-semibold uppercase tracking-[0.34em] text-white">
                DJ{" "}
                <span className="glitch text-[#72e5ef]" data-glitch="WARLEY">
                  WARLEY
                </span>
              </span>
              <span className="mt-2 block text-[8px] font-medium uppercase tracking-[0.25em] text-white/60 sm:text-[9px]">
                DJ • SOM • ILUMINAÇÃO • LOCAÇÃO
              </span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-center lg:gap-5">
            <span className="h-px w-12 bg-cyan-400/45" />
            <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-white/75 lg:whitespace-nowrap lg:tracking-[0.33em]">
              Criando experiências através da música
            </p>
            <span className="h-px w-12 bg-cyan-400/45" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 text-[12px] lg:justify-end">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white/85 transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:text-cyan-300"
            >
              <ContactIcon type="instagram" className="h-6 w-6 text-cyan-400" />
              <span className="border-b border-cyan-400/40 pb-1">
                Instagram
              </span>
            </a>
            <span className="hidden h-5 w-px bg-cyan-300/25 sm:block" />
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white/85 transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:text-cyan-300"
            >
              <ContactIcon type="whatsapp" className="h-6 w-6 text-cyan-400" />
              <span className="border-b border-cyan-400/40 pb-1">WhatsApp</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[10px] text-white/55 sm:text-[11px] lg:justify-end lg:border-l lg:border-t-0 lg:border-white/10 lg:pl-5 lg:pt-0">
            <span>© 2026 DJ NOME · Todos os direitos reservados.</span>
            <a
              href="#privacidade"
              className="text-white/70 transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:text-cyan-300"
            >
              Política de Privacidade{" "}
              <span className="ml-2 text-cyan-400">→</span>
            </a>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
