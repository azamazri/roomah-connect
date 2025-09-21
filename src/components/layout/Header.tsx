import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground text-sm font-bold">
            R
          </div>
          <span className="text-foreground">Roomah</span>
        </Link>

        {/* Main Navigation */}
        <nav role="navigation" aria-label="Navigasi utama" className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
          >
            BERANDA
          </Link>
          <Link 
            to="/tentang" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
          >
            TENTANG
          </Link>
          <Link 
            to="/kontak" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
          >
            KONTAK
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Masuk</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link to="/register">Daftar Gratis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}