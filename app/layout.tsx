import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ [NOME] — Som, energia e experiência",
  description:
    "DJ, som profissional, iluminação e locação de equipamentos para eventos memoráveis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
