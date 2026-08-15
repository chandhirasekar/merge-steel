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
  title: "Merge Steel — Structural Steel Detailing Experts | Trichy",
  description:
    "Merge Steel (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Specializing in advanced BIM coordination and clash detection. Thillai Nagar, Trichy.",
  keywords: [
    "Merge Steel",
    "MERGESTEEL",
    "engineered steel solutions",
    "structural steel detailing",
    "steel detailing India",
    "fabrication drawings",
    "shop drawings",
    "BIM Trichy",
    "Thillai Nagar",
  ],
  authors: [{ name: "Merge Steel" }],
  openGraph: {
    title: "Merge Steel — Structural Steel Detailing Experts | Trichy",
    description:
      "Merge Steel (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Thillai Nagar, Trichy.",
    url: "https://merge-steel-three.vercel.app/",
    siteName: "Merge Steel",
    images: [
      {
        url: "/mergesteel.png",
        width: 1200,
        height: 630,
        alt: "Merge Steel — engineered steel solutions. Structural steel detailing experts.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Steel — Structural Steel Detailing Experts | Trichy",
    description:
      "Merge Steel (est. 2018): High-quality structural steel detailing services from input review to fabrication release. Thillai Nagar, Trichy.",
    images: ["/mergesteel.png"],
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
