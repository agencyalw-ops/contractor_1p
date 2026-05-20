import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.3");
        const rect = el.getBoundingClientRect();
        const offsetTop = rect.top + scrollY;
        const relativeScroll = scrollY - offsetTop + window.innerHeight;
        const translateY = relativeScroll * speed * -1;
        (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
      });
      requestAnimationFrame(updateParallax);
    }

    requestAnimationFrame(updateParallax);
  }, []);
}
