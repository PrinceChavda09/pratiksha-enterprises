"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Loader() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const prevPathRef = useRef(pathname);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safeguardTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAllTimers = useCallback(() => {
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
    if (safeguardTimerRef.current) clearTimeout(safeguardTimerRef.current);
  }, []);

  const dismissLoader = useCallback(() => {
    clearAllTimers();

    // Intentional short display time for a smooth, premium transition
    fadeTimerRef.current = setTimeout(() => {
      setIsFading(true);
      removeTimerRef.current = setTimeout(() => {
        setIsMounted(false);
        setIsFading(false);
      }, 400); // Matches transition-opacity duration-400
    }, 300);
  }, [clearAllTimers]);

  const showLoader = useCallback(() => {
    clearAllTimers();
    setIsMounted(true);
    setIsFading(false);

    // Safeguard: guarantee the loader disappears even if a navigation is cancelled or stalls
    safeguardTimerRef.current = setTimeout(() => {
      dismissLoader();
    }, 2500);
  }, [clearAllTimers, dismissLoader]);

  // 1. Initial Page Load Lifecycle
  useEffect(() => {
    let initialTimer: ReturnType<typeof setTimeout>;

    const handleInitialReady = () => {
      initialTimer = setTimeout(() => {
        dismissLoader();
      }, 450);
    };

    if (document.readyState === "complete") {
      handleInitialReady();
    } else {
      window.addEventListener("load", handleInitialReady, { once: true });
    }

    return () => {
      clearTimeout(initialTimer);
      clearAllTimers();
    };
  }, [dismissLoader, clearAllTimers]);

  // 2. Route Change Detection: Dismiss loader when destination route renders
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      dismissLoader();
    }
  }, [pathname, dismissLoader]);

  // 3. Navigation Click & Popstate Interception: Show loader on internal route transitions
  useEffect(() => {
    const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

    const handleClick = (e: MouseEvent) => {
      // Only process primary left clicks without modifier keys
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore explicit target="_blank", downloads, or role buttons
      if (
        anchor.target &&
        anchor.target !== "_self" &&
        anchor.target !== ""
      ) {
        return;
      }
      if (anchor.hasAttribute("download")) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      // Ignore non-http/https (tel:, mailto:, etc.)
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      // Ignore external domains
      if (url.origin !== window.location.origin) return;

      // Ignore same-page navigation (e.g. clicking the current page or in-page hash link)
      const currentPath = normalize(window.location.pathname);
      const targetPath = normalize(url.pathname);

      if (
        currentPath === targetPath &&
        url.search === window.location.search
      ) {
        return;
      }

      // Valid internal route navigation initiated
      showLoader();
    };

    const handlePopState = () => {
      const currentPath = normalize(window.location.pathname);
      const prevPath = normalize(prevPathRef.current);

      if (currentPath !== prevPath) {
        showLoader();
      }
    };

    // Use capture phase to reliably detect navigation link clicks before bubble
    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showLoader]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      id="global-loader"
      role="status"
      aria-live="polite"
      aria-busy={!isFading}
      aria-hidden={isFading}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white overflow-hidden transition-opacity duration-400 ease-out select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center px-4 max-w-full">
        {/* Existing Brand Logo */}
        <div className="relative mb-5 flex items-center justify-center">
          <Image
            src="/images/pratiksha-logo.webp"
            alt="Pratiksha Earthing Solutions"
            width={180}
            height={93}
            priority
            className="h-12 sm:h-14 md:h-16 w-auto max-w-[75vw] object-contain animate-pulse"
          />
        </div>

        {/* Minimalist Brand Progress Animation */}
        <div
          className="w-36 sm:w-44 h-1 rounded-full overflow-hidden relative"
          style={{ backgroundColor: "rgba(8, 117, 138, 0.12)" }}
        >
          <div
            className="loader-bar-indicator h-full rounded-full"
            style={{
              backgroundColor: "var(--primary-color, #08758a)",
            }}
          />
        </div>

        {/* Screen Reader Accessibility Text */}
        <span className="sr-only">Loading Pratiksha Enterprises...</span>
      </div>

      <style>{`
        @keyframes loaderSlide {
          0% {
            left: -35%;
            width: 35%;
          }
          50% {
            left: 30%;
            width: 50%;
          }
          100% {
            left: 100%;
            width: 35%;
          }
        }
        .loader-bar-indicator {
          position: absolute;
          top: 0;
          bottom: 0;
          animation: loaderSlide 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .loader-bar-indicator {
            animation: none;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
