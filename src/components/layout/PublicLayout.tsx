import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <a 
        href="#konten" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md focus:z-50"
      >
        Lewati ke Konten
      </a>
      
      <Header />
      
      <main id="konten" className="flex-1">
        {children}
      </main>
      
      <Footer />
    </>
  );
}