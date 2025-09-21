import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FilterBar from "@/components/common/FilterBar";
import CandidateTeaser from "@/components/common/CandidateTeaser";
import PublicLayout from "@/components/layout/PublicLayout";
import heroImage from "/images/hero-banner.webp";

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-surface-1">
        <div className="container px-4 text-center">
          <h1 className="text-display font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Mewujudkan Pernikahan
            <br />
            Membangun Peradaban
          </h1>
          <p className="text-lead text-muted-foreground mb-8 max-w-2xl mx-auto">
            Platform Ta'aruf Islami yang membantu Anda menemukan pasangan shaleh/shalehah untuk membangun keluarga sakinah.
          </p>
          <Button size="lg" asChild>
            <Link to="/cari-jodoh">
              🔍 Mulai Pencarian
            </Link>
          </Button>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="relative rounded-2xl min-h-[400px] hero-gradient overflow-hidden elevated">
            <img
              src={heroImage}
              alt="Pasangan Bahagia dalam Pernikahan Islami - Roomah"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="relative z-10 flex items-center justify-center min-h-[400px] px-8">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Temukan Jodoh Terbaik Anda
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Bergabunglah dengan ribuan Muslim dan Muslimah yang telah menemukan pasangan hidup melalui Roomah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-surface-2">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Temukan Pasangan Hidup Anda
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Telasah profil calon yang siap untuk melanjuti ke jenjang pernikahan.
            </p>
          </div>

          <div className="mb-12">
            <FilterBar />
          </div>

          <CandidateTeaser />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Mengapa Memilih Roomah?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Platform Ta'aruf terpercaya dengan pendekatan Islami yang sesuai syariat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ta'aruf Sesuai Syariat
              </h3>
              <p className="text-muted-foreground">
                Proses ta'aruf yang sesuai dengan ajaran Islam dan melibatkan keluarga dalam setiap tahapannya.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Profil Terverifikasi
              </h3>
              <p className="text-muted-foreground">
                Semua profil telah melewati proses verifikasi untuk memastikan keaslian dan keseriusan niat.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Privasi Terjamin
              </h3>
              <p className="text-muted-foreground">
                Data pribadi Anda aman dan terlindungi dengan sistem keamanan tingkat tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}