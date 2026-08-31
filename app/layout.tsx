import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Marck_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const marck = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-marck",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almaz & Nuray — 24 октября 2026",
  description: "Приглашение на свадьбу Алмаза и Нурай. 24 октября 2026, ресторан «АБК».",
  openGraph: {
    title: "Almaz & Nuray — 24 октября 2026",
    description: "Приглашаем вас на нашу свадьбу",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable} ${marck.variable}`}>
      <body>
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
