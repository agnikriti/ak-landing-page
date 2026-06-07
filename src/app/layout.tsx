import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-ubuntu",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agnikriti.com"),
  title: "Agnikriti",
  description: "Digital solutions crafted with precision.",
  openGraph: {
    title: "Agnikriti",
    description: "Digital solutions crafted with precision.",
    url: "https://www.agnikriti.com",
    siteName: "Agnikriti",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agnikriti — Digital solutions crafted with precision",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnikriti",
    description: "Digital solutions crafted with precision.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
