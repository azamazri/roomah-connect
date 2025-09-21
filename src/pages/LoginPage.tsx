import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
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
            <CardTitle className="text-center">Masuk ke Akun Anda</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input id="email" type="email" placeholder="nama@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input id="password" type="password" placeholder="Masukkan password" />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border-border" />
                  Ingat saya
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-link hover:underline focus-ring rounded-md px-1 py-1"
                >
                  Lupa password?
                </Link>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Masuk
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Belum punya akun?{" "}
                <Link 
                  to="/register" 
                  className="text-link hover:underline focus-ring rounded-md px-1 py-1"
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}