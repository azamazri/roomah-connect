import PublicLayout from "@/components/layout/PublicLayout";

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Tentang Roomah</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Roomah adalah platform Ta'aruf Islami yang berkomitmen membantu umat Muslim 
                menemukan pasangan hidup yang sesuai dengan nilai-nilai Islam. Kami percaya 
                bahwa pernikahan adalah ibadah dan fondasi penting dalam membangun peradaban yang berkualitas.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Misi Kami</h2>
              <p>
                Mempermudah proses ta'aruf yang sesuai syariat Islam dengan menghubungkan 
                Muslim dan Muslimah yang memiliki niat serius untuk berumah tangga dan 
                membangun keluarga sakinah, mawaddah, wa rahmah.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Nilai-Nilai Kami</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengutamakan prinsip-prinsip Islam dalam setiap proses</li>
                <li>Menghormati privasi dan kehormatan setiap anggota</li>
                <li>Menjaga transparansi dan kejujuran dalam profil</li>
                <li>Mendukung keterlibatan keluarga dalam proses ta'aruf</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}