"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const quoteHref =
  "mailto:contato@sompro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento";

export function DJNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.25;

      let currentSection = "inicio";

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] px-4 pt-4 sm:px-8 sm:pt-5 lg:px-12">
      <div className="relative mx-auto flex max-w-[1720px] items-center justify-between gap-3 border-b border-white/[.08] pb-3 sm:pb-4">
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="reference-button reference-button-ice group flex h-9 w-8 shrink-0 flex-col items-center justify-center gap-[5px] text-white/70 transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:text-[#72e5ef] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-70"}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
          />
        </button>

        <a
          href="#inicio"
          aria-label="DJ [NOME] — início"
          className="group mr-auto inline-flex scale-[1.12] origin-left items-baseline whitespace-nowrap text-[18px] font-semibold tracking-[-.06em] text-white transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:text-white sm:text-[21px] lg:mr-0"
        >
          <Image src="/logo.png" alt="DJ WARLEY" width={100} height={100} />
        </a>

        <nav
          aria-label="Navegação principal"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-7 lg:flex"
        >
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative scale-[1.14] whitespace-nowrap py-3 text-[9px] font-medium uppercase tracking-[.28em] transition-colors duration-500 ease-[cubic-bezier(.22,1,.36,1)] xl:text-[10px] ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/90"
                }`}
              >
                {link.label}

                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#72e5ef] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href={quoteHref}
          className="reference-button reference-button-ice group inline-flex origin-right [transform:scale(1.1)] shrink-0 items-center gap-2 rounded-full border border-[#72e5ef]/65 bg-[#061017]/35 py-[7px] pl-3.5 pr-1.5 text-[9px] font-semibold text-white shadow-[0_0_18px_rgba(49,201,231,.08)] transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#72e5ef] hover:bg-[#0c1c23]/75 hover:shadow-[0_0_22px_rgba(49,201,231,.16)] active:scale-[.98] sm:gap-3 sm:py-2 sm:pl-5 sm:text-[10px] max-[360px]:gap-1 max-[360px]:pl-2 max-[360px]:pr-1 max-[360px]:text-[7px]"
        >
          Solicitar orçamento
          <span className="flex h-6 w-6 scale-110 items-center justify-center rounded-full bg-white/[.07] text-[#a7f2fa] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5 max-[360px]:h-5 max-[360px]:w-5">
            →
          </span>
        </a>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Navegação móvel"
              initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full mt-3 rounded-2xl border border-white/10 bg-[#080d12]/95 p-3 shadow-[0_18px_55px_-30px_rgba(0,0,0,.8)] lg:hidden"
            >
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={index === 0 ? "page" : undefined}
                  className={`flex scale-[1.1] items-center justify-between border-b border-white/[.06] px-3 py-3.5 text-[10px] uppercase tracking-[.24em] transition-colors duration-300 hover:text-[#72e5ef] ${index === 0 ? "text-[#72e5ef]" : "text-white/70"}`}
                >
                  {link.label}
                  <span className="font-mono text-[9px] text-white/30">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
