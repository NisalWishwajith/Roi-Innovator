"use client";
import Header from "./head";
import Footer from "@/src/components/Footer";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/src/styles/index.css";
import { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "next-themes";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <Header />
      </head>

      <body className="bg-gradient-black-blue">
       <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          {children}
          <Footer />
       </ThemeProvider>
      </body>
    </html>
  );
}


