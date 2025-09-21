import PublicLayout from "@/components/layout/PublicLayout";

export default function TermsPage() {
  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Syarat & Ketentuan</h1>
            <p className="text-muted-foreground mb-8">Terakhir diperbarui: September 2024</p>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ketentuan Umum</h2>
                <p>
                  Dengan menggunakan layanan Roomah, Anda setuju untuk mematuhi syarat dan ketentuan 
                  yang berlaku. Platform ini dirancang khusus untuk memfasilitasi ta'aruf sesuai 
                  dengan nilai-nilai Islam.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Persyaratan Pengguna</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimal berusia 18 tahun dan belum menikah</li>
                  <li>Beragama Islam dan memiliki niat serius untuk menikah</li>
                  <li>Memberikan informasi yang akurat dan terkini</li>
                  <li>Mengunggah foto profil yang sesuai dengan norma kesopanan</li>
                  <li>Tidak menggunakan platform untuk tujuan komersial</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Aturan Perilaku</h2>
                <p>
                  Pengguna diharapkan berperilaku sopan dan menghormati sesama anggota. 
                  Dilarang keras melakukan:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Pelecehan, ancaman, atau intimidasi</li>
                  <li>Berbagi konten yang tidak pantas atau melanggar norma</li>
                  <li>Menyebarkan informasi palsu atau menyesatkan</li>
                  <li>Spam atau promosi tidak diinginkan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Penangguhan dan Pembatasan</h2>
                <p>
                  Kami berhak menangguhkan atau menghapus akun yang melanggar ketentuan layanan 
                  tanpa pemberitahuan sebelumnya. Keputusan ini bersifat final dan tidak dapat 
                  diganggu gugat.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}