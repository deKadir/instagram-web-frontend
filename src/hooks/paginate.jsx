import { useEffect, useState } from "react";
export const usePaginate = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    function onScroll() {
      if (
        this.document.documentElement.scrollHeight ===
        window.pageYOffset + this.window.innerHeight
      ) {
        setPage(page + 1);
      } else {
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [page]);
  return { page };
};
