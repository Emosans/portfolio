import { useEffect } from "react";
import Typed from "typed.js";

export function useTypingEffect(elementId: string, strings: string[]) {
  useEffect(() => {
    const typed = new Typed(`#${elementId}`, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [elementId, strings]);
}
