import { breakpoints } from "@/styles/theme";
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [isLaptop, setIsLaptop] = useState<boolean>(false);

  function update() {
    setIsLaptop(window.innerWidth >= breakpoints.laptop);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update, false);

    return () => {
      window.removeEventListener("resize", update, false);
    };
  }, []);

  return { isLaptop };
}

export type ViewportSize = ReturnType<typeof useWindowSize>;
