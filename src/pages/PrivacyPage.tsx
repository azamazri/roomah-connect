import PublicLayout from "@/components/layout/PublicLayout";

export default function PrivacyPage() {
  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Kebijakan Privasi</h1>
            <p className="text-muted-foreground mb-8">Terakhir diperbarui: September 2024</p>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Informasi yang Kami Kumpulkan</h2>
                <p>
                  Kami mengumpulkan berbagai jenis informasi untuk memberikan dan meningkatkan layanan 
                  kami kepada Anda, termasuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Informasi profil pribadi (nama, usia, lokasi, pendidikan, pekerjaan)</li>
                  <li>Informasi kontak (email, nomor telepon)</li>
                  <li>Preferensi dan kriteria pasangan</li>
                  <li>Data interaksi dalam platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Bagaimana Kami Menggunakan Informasi</h2>
                <p>
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Menyediakan layanan ta'aruf dan mencocokkan profil</li>
                  <li>Memverifikasi identitas dan mencegah penipuan</li>
                  <li>Meningkatkan keamanan dan kualitas layanan</li>
                  <li>Mengirimkan notifikasi dan update layanan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Perlindungan Data</h2>
                <p>
                  Kami berkomitmen melindungi data pribadi Anda dengan menggunakan enkripsi tingkat tinggi, 
                  sistem keamanan berlapis, dan akses terbatas hanya untuk tim yang berwenang. Data Anda 
                  tidak akan dijual atau dibagikan kepada pihak ketiga tanpa persetujuan Anda.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Hak Anda</h2>
                <p>
                  Anda memiliki hak untuk mengakses, memperbarui, atau menghapus data pribadi Anda. 
                  Untuk melakukan hal tersebut, silakan hubungi tim dukungan kami melalui halaman kontak.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}