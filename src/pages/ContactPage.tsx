import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Hubungi Kami</h1>
              <p className="text-muted-foreground">
                Ada pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim Roomah.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nama Lengkap
                      </label>
                      <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="nama@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subjek
                      </label>
                      <Input id="subject" placeholder="Tentang apa yang ingin Anda sampaikan?" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Pesan
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tulis pesan Anda di sini..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">support@roomah.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground">+62 812-3456-7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🕐</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Jam Operasional</h3>
                        <p className="text-muted-foreground">
                          Senin - Jumat: 09:00 - 17:00 WIB<br />
                          Sabtu - Minggu: 10:00 - 15:00 WIB
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}