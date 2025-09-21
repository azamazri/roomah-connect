import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FilterBar() {
  return (
    <div className="bg-surface border border-border rounded-lg elevated p-6">
      <form method="get" action="/cari-jodoh" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="space-y-2">
          <label htmlFor="gender" className="text-sm font-medium text-foreground">
            Pilih Gender
          </label>
          <Select id="gender" name="gender">
            <option value="">Pilih Gender</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="age" className="text-sm font-medium text-foreground">
            Pilih Umur
          </label>
          <Select id="age" name="age">
            <option value="">Pilih Umur</option>
            <option value="20-25">20-25 tahun</option>
            <option value="26-30">26-30 tahun</option>
            <option value="31-35">31-35 tahun</option>
            <option value="36-40">36-40 tahun</option>
            <option value="41+">41+ tahun</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="education" className="text-sm font-medium text-foreground">
            Pilih Pendidikan
          </label>
          <Select id="education" name="edu">
            <option value="">Pilih Pendidikan</option>
            <option value="sma">SMA/SMK</option>
            <option value="diploma">Diploma</option>
            <option value="s1">S1</option>
            <option value="s2">S2</option>
            <option value="s3">S3</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="province" className="text-sm font-medium text-foreground">
            Pilih Domisili
          </label>
          <Select id="province" name="province">
            <option value="">Pilih Domisili</option>
            <option value="jakarta">DKI Jakarta</option>
            <option value="jawa-barat">Jawa Barat</option>
            <option value="jawa-tengah">Jawa Tengah</option>
            <option value="jawa-timur">Jawa Timur</option>
            <option value="yogyakarta">DI Yogyakarta</option>
            <option value="banten">Banten</option>
            <option value="sumatra-utara">Sumatra Utara</option>
            <option value="sumatra-barat">Sumatra Barat</option>
            <option value="riau">Riau</option>
            <option value="sumatra-selatan">Sumatra Selatan</option>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button type="submit" variant="primary" className="flex-1">
            Terapkan
          </Button>
          <Button variant="outline" asChild>
            <Link to="/cari-jodoh">Reset</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}