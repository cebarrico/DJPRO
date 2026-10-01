import type { Metadata } from "next";
import "./globals.css";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DJ WARLEY — Som, energia e experiência",
  description:
    "DJ, som profissional, iluminação e locação de equipamentos para eventos memoráveis.",
};

// substitude the metadata above with the following metadata with the correct information
// export const metadata: Metadata = {
//   title: "DJ Warley | DJ, Som e Iluminação para Eventos",
//   description:
//     "DJ Warley para festas e eventos. DJ, som profissional, iluminação e locação de equipamentos para criar experiências marcantes.",

//   keywords: [
//     "DJ Warley",
//     "DJ para eventos",
//     "DJ para festas",
//     "DJ casamento",
//     "DJ aniversário",
//     "DJ corporativo",
//     "som para eventos",
//     "iluminação para eventos",
//     "locação de equipamentos",
//   ],

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "DJ Warley | DJ, Som e Iluminação para Eventos",
//     description:
//       "DJ, som profissional, iluminação e locação de equipamentos para eventos.",
//     type: "website",
//     locale: "pt_BR",
//     siteName: "DJ Warley",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "DJ Warley | DJ, Som e Iluminação para Eventos",
//     description:
//       "DJ, som profissional, iluminação e locação de equipamentos para eventos.",
//   },
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={zenDots.variable}>{children}</body>
    </html>
  );
}

/* add this to the layout.tsx file on tag body with the correct metadata */
{
  /* <script
type="application/ld+json"
dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "DJ Warley",
    jobTitle: "DJ",
    description:
      "DJ para eventos, som profissional, iluminação e locação de equipamentos.",
    url: "https://SEU-DOMINIO.com",
  }),
}}
/> */
}
