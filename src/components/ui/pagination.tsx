import { Link } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}

export function Pagination({ currentPage, totalPages, baseUrl, className }: PaginationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav 
      className={cn("flex items-center justify-center gap-2", className)}
      aria-label="Navigasi pagination"
    >
      {prevPage ? (
        <Button variant="outline" size="sm" asChild>
          <Link to={`${baseUrl}?page=${prevPage}`}>
            Sebelumnya
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          Sebelumnya
        </Button>
      )}

      <span className="px-3 py-2 text-sm text-muted-foreground">
        Halaman {currentPage} dari {totalPages}
      </span>

      {nextPage ? (
        <Button variant="outline" size="sm" asChild>
          <Link to={`${baseUrl}?page=${nextPage}`}>
            Selanjutnya
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          Selanjutnya
        </Button>
      )}
    </nav>
  );
}