import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-gradient border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                R
              </div>
              <span className="font-semibold text-lg text-foreground">Roomah</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Platform Ta'aruf Islami yang membantu Anda menemukan pasangan shaleh/shalehah untuk membangun keluarga sakinah.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigasi</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-1 py-1"
              >
                Beranda
              </Link>
              <Link 
                to="/tentang" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-1 py-1"
              >
                Tentang
              </Link>
              <Link 
                to="/kontak" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-1 py-1"
              >
                Kontak
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-1 py-1"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-1 py-1"
              >
                Syarat & Ketentuan
              </Link>
            </nav>
          </div>
        </div>

        <hr className="border-border my-8" />
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Roomah. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}