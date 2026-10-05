"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isMounted, setIsMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const handleReady = () => {
      // Short display time so the loading experience is smooth and intentional
      fadeTimer = setTimeout(() => {
        setIsFading(true);
        // Remove from DOM once fade transition is complete
        removeTimer = setTimeout(() => {
          setIsMounted(false);
        }, 400);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    // Fail-safe safeguard: ensure the loader dismisses even under slow/blocked network
    const safeguardTimer = setTimeout(() => {
      setIsFading(true);
      removeTimer = setTimeout(() => {
        setIsMounted(false);
      }, 400);
    }, 2000);

    return () => {
      window.removeEventListener("load", handleReady);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(safeguardTimer);
    };
  }, []);

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
