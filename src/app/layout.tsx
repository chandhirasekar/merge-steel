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
  title: "Steel Wave — Tekla Training & Structural Steel Detailing | Trichy",
  description:
    "Steel Wave (est. 2018): authorized Tekla training, 180+ student placements, and structural steel detailing from input review to fabrication release. Thillai Nagar, Trichy, Tamil Nadu.",
  keywords: [
    "Steel Wave",
    "STEELWAVE",
    "engineered steel solutions",
    "Tekla training Trichy",
    "Tekla Structures course",
    "structural steel detailing",
    "steel detailing India",
    "fabrication drawings",
    "shop drawings",
    "BIM Trichy",
    "steel training placement",
    "Thillai Nagar",
  ],
  authors: [{ name: "Steel Wave" }],
  openGraph: {
    title: "Steel Wave — Tekla Training & Structural Steel Detailing | Trichy",
    description:
      "Steel Wave (est. 2018): authorized Tekla training, 180+ student placements, and structural steel detailing from input review to fabrication release. Thillai Nagar, Trichy, Tamil Nadu.",
    url: "https://www.steelwavetrichy.com/",
    siteName: "Steel Wave",
    images: [
      {
        url: "/steelwave-logo.png",
        width: 1200,
        height: 630,
        alt: "Steel Wave — engineered steel solutions. Authorized Tekla training and structural steel detailing.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Wave — Tekla Training & Structural Steel Detailing | Trichy",
    description:
      "Steel Wave (est. 2018): authorized Tekla training, 180+ student placements, and structural steel detailing from input review to fabrication release. Thillai Nagar, Trichy, Tamil Nadu.",
    images: ["/steelwave-logo.png"],
  },
  icons: {
    icon: "/steelwave-logo.png",
    shortcut: "/steelwave-logo.png",
    apple: "/steelwave-logo.png",
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
