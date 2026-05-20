import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    let animationFrameId: number | null = null;
    let lastScrollY = 0;

    function updateParallax() {
      const scrollY = window.scrollY;
      
      // Only update if scroll position has changed significantly
      if (Math.abs(scrollY - lastScrollY) < 1) {
        animationFrameId = requestAnimationFrame(updateParallax);
        return;
      }
      
      lastScrollY = scrollY;

      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.3");
        const rect = el.getBoundingClientRect();
        
        // Only update elements that are in or near the viewport
        if (rect.top > window.innerHeight + 100 || rect.bottom < -100) {
          return;
        }

        const offsetTop = rect.top + scrollY;
        const relativeScroll = scrollY - offsetTop + window.innerHeight;
        const translateY = relativeScroll * speed * -1;
        
        // Use CSS transform for better performance
        (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
        (el as HTMLElement).style.willChange = "transform";
      });

      animationFrameId = requestAnimationFrame(updateParallax);
    }

    animationFrameId = requestAnimationFrame(updateParallax);

    // Cleanup on unmount
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
