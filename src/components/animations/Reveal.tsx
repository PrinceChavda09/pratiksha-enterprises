"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";

export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale"
  | "none";

export interface RevealProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  id?: string;
  direction?: RevealDirection;
  delay?: number; // seconds
  duration?: number; // seconds
  distance?: number; // pixels (default: 24, on mobile scaled to ~16)
  threshold?: number;
  scale?: boolean;
  once?: boolean;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  id,
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 24,
  threshold = 0.15,
  scale = false,
  once = true,
  className = "",
  as: Component = "div",
  style = {},
  ...rest
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
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
  }, [once, threshold]);

  // Calculate initial transform offsets based on direction
  const getTransform = () => {
    if (isVisible) return "none";

    const parts: string[] = [];

    switch (direction) {
      case "up":
        parts.push(`translate3d(0, ${distance}px, 0)`);
        break;
      case "down":
        parts.push(`translate3d(0, -${distance}px, 0)`);
        break;
      case "left":
        parts.push(`translate3d(${distance}px, 0, 0)`);
        break;
      case "right":
        parts.push(`translate3d(-${distance}px, 0, 0)`);
        break;
      case "scale":
      case "fade":
      case "none":
        break;
    }

    if (scale || direction === "scale") {
      parts.push("scale3d(0.97, 0.97, 1)");
    }

    return parts.length > 0 ? parts.join(" ") : "none";
  };

  const animationStyle: CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}s var(--animation-ease, cubic-bezier(0.16, 1, 0.3, 1)) ${delay}s, transform ${duration}s var(--animation-ease, cubic-bezier(0.16, 1, 0.3, 1)) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      style={animationStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
