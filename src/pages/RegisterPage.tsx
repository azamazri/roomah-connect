import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-1 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-semibold text-2xl focus-ring rounded-md p-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold">
              R
            </div>
            <span className="text-foreground">Roomah</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Daftar Akun Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nama Lengkap
                </label>
                <Input id="name" placeholder="Masukkan nama lengkap" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input id="email" type="email" placeholder="nama@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="text-sm font-medium text-foreground">
                  Jenis Kelamin
                </label>
                <Select id="gender">
                  <option value="">Pilih jenis kelamin</option>
                  <option value="pria">Pria</option>
                  <option value="wanita">Wanita</option>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input id="password" type="password" placeholder="Minimum 8 karakter" />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Konfirmasi Password
                </label>
                <Input id="confirmPassword" type="password" placeholder="Ulangi password" />
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border-border mt-0.5" required />
                  <span>
                    Saya setuju dengan{" "}
                    <Link to="/terms" className="text-link hover:underline">
                      Syarat & Ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link to="/privacy" className="text-link hover:underline">
                      Kebijakan Privasi
                    </Link>
                  </span>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Daftar Sekarang
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Sudah punya akun?{" "}
                <Link 
                  to="/login" 
                  className="text-link hover:underline focus-ring rounded-md px-1 py-1"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}