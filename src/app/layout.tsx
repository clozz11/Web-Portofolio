import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050d07",
};

export const metadata: Metadata = {
  title: "Carlos Achanta Zakky — Backend Developer & Software Engineering",
  description:
    "Portofolio Carlos Achanta Zakky — Backend Developer & Software Engineering, mahasiswa Computer Science BINUS University. Spesialis RESTful API, arsitektur backend, dan sistem database relasional.",
  keywords: [
    "Carlos Achanta Zakky",
    "Backend Developer",
    "Software Engineering",
    "Computer Science",
    "BINUS University",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Carlos Achanta Zakky" }],
  openGraph: {
    title: "Carlos Achanta Zakky — Backend Developer & Software Engineering",
    description: "Building robust APIs, scalable backend systems, and efficient database architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased selection:bg-green-400 selection:text-black relative min-h-screen bg-forest-950`}
      >
        <LoadingScreen />
        <div className="ambient-glow" />
        <CursorGlow />
        <SmoothScroll />
        <ScrollRevealInit />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
