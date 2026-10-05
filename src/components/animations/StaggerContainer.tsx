"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";

interface StaggerContextType {
  isVisible: boolean;
  staggerDelay: number;
  baseDelay: number;
  prefersReducedMotion: boolean;
}

const StaggerContext = createContext<StaggerContextType>({
  isVisible: false,
  staggerDelay: 0.08,
  baseDelay: 0,
  prefersReducedMotion: false,
});

export function useStaggerContext() {
  return useContext(StaggerContext);
}

export interface StaggerContainerProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  staggerDelay?: number; // seconds between children (default: 0.08)
  delay?: number; // base delay (default: 0)
  threshold?: number;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

export default function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Component = "div",
  style = {},
  ...rest
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <StaggerContext.Provider
      value={{
        isVisible,
        staggerDelay,
        baseDelay: delay,
        prefersReducedMotion: false,
      }}
    >
      <Component ref={ref} className={className} style={style} {...rest}>
        {children}
      </Component>
    </StaggerContext.Provider>
  );
}
