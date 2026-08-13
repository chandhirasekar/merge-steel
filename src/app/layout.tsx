import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merge-steel-three.vercel.app"),
  title: "Steel Wave — Structural Steel Detailing Experts | Trichy",
  description:
    "Steel Wave (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Specializing in advanced BIM coordination and clash detection. Thillai Nagar, Trichy.",
  keywords: [
    "Steel Wave",
    "STEELWAVE",
    "engineered steel solutions",
    "structural steel detailing",
    "steel detailing India",
    "fabrication drawings",
    "shop drawings",
    "BIM Trichy",
    "Thillai Nagar",
  ],
  authors: [{ name: "Steel Wave" }],
  openGraph: {
    title: "Steel Wave — Structural Steel Detailing Experts | Trichy",
    description:
      "Steel Wave (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Thillai Nagar, Trichy.",
    url: "https://merge-steel-three.vercel.app/",
    siteName: "Steel Wave",
    images: [
      {
        url: "/steelwave-logo.png",
        width: 1200,
        height: 630,
        alt: "Steel Wave — engineered steel solutions. Structural steel detailing experts.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Wave — Structural Steel Detailing Experts | Trichy",
    description:
      "Steel Wave (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Thillai Nagar, Trichy.",
    images: ["/steelwave-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#0A4DFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
