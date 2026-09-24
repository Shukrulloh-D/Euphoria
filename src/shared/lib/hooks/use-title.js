import { useEffect } from "react";
export const useTitle = (title) => {
  useEffect(() => {
    const prev = document.title;
    if (title) document.title = `${title} — Euphoria`;
    return () => {
      document.title = prev;
    };
  }, [title]);
};
