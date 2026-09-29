"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Re-export useLenis for centralized usage across the application
export { useLenis };

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Handles route navigation scroll restoration and anchor link alignment
 * taking into account the fixed 80px navbar height.
 */
function LenisRouteHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // If an anchor hash exists in URL on navigation, scroll smoothly to target
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      try {
        const target = document.querySelector(hash) as HTMLElement | null;
        if (target) {
          lenis.scrollTo(target, { offset: -80, immediate: true });
          return;
        }
      } catch {
        // In case hash is not a valid CSS selector
      }
    }

    // Reset scroll to top on page change
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Check user preference for reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        // Smooth mouse wheel on desktop; disabled if reduced motion preferred
        smoothWheel: !prefersReducedMotion,
        // Crucial: preserve native touch and momentum scrolling on mobile devices
        syncTouch: false,
        touchMultiplier: 1,
        // Balanced, responsive easing and duration (premium, natural, not sluggish)
        lerp: 0.1,
        duration: 1.1,
        wheelMultiplier: 1,
        // Single automatic rAF loop managed and cleaned up by Lenis
        autoRaf: true,
        // Accessibility: respects reduced motion preference
        respectReducedMotion: true,
        // Seamless anchor navigation with 80px fixed navbar offset
        anchors: {
          offset: -80,
          duration: 1.1,
        },
        stopInertiaOnNavigate: true,
        // Allow elements with data-lenis-prevent (e.g. maps, modals) to scroll independently
        prevent: (node) => {
          return (
            node?.nodeType === 1 &&
            (node.hasAttribute("data-lenis-prevent") ||
              !!node.closest?.("[data-lenis-prevent]"))
          );
        },
      }}
    >
      <LenisRouteHandler />
      {children}
    </ReactLenis>
  );
}
