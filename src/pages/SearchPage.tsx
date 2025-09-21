import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import FilterBar from "@/components/common/FilterBar";
import CandidateTeaser from "@/components/common/CandidateTeaser";

export default function SearchPage() {
  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cari Jodoh Anda
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan pasangan hidup yang sesuai dengan kriteria dan nilai-nilai yang Anda cari
            </p>
          </div>

          <div className="mb-12">
            <FilterBar />
          </div>

          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Menampilkan 6 kandidat dari total 150+ profil aktif
            </p>
          </div>

          <CandidateTeaser />

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Ingin melihat lebih banyak profil dan fitur lengkap?
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus-ring transition-colors">
                Daftar Premium
              </button>
              <button className="px-6 py-3 border border-border bg-background text-foreground rounded-md hover:bg-surface-1 focus-ring transition-colors">
                Lihat Paket Harga
              </button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}