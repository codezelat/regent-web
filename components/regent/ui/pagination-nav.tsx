import Link from "next/link";

export function PaginationNav({
  currentPage,
  totalPages,
  basePath,
  query = {},
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: Record<string, string | undefined>;
}) {
  if (totalPages <= 1) {
    return null;
  }

  const hrefForPage = (page: number) => {
    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    if (page > 1) {
      params.set("page", String(page));
    }

    const path = basePath;
    const suffix = params.toString();

    return suffix ? `${path}?${suffix}` : path;
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <Link
        aria-disabled={currentPage === 1}
        className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          currentPage === 1
            ? "pointer-events-none border border-black/10 text-black/30"
            : "bg-[var(--regent-blue-900)] text-white hover:bg-[var(--regent-blue-800)]"
        }`}
        href={hrefForPage(Math.max(1, currentPage - 1))}
      >
        Previous
      </Link>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          aria-current={page === currentPage ? "page" : undefined}
          className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
            page === currentPage
              ? "bg-[var(--regent-red)] text-white"
              : "border border-black/10 text-[var(--foreground)] hover:border-[var(--regent-red)] hover:text-[var(--regent-red)]"
          }`}
          href={hrefForPage(page)}
        >
          {page}
        </Link>
      ))}

      <Link
        aria-disabled={currentPage === totalPages}
        className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none border border-black/10 text-black/30"
            : "bg-[var(--regent-blue-900)] text-white hover:bg-[var(--regent-blue-800)]"
        }`}
        href={hrefForPage(Math.min(totalPages, currentPage + 1))}
      >
        Next
      </Link>
    </nav>
  );
}
