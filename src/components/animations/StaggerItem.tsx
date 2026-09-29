"use client";

import React, {
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";
import { useStaggerContext } from "./StaggerContainer";
import type { RevealDirection } from "./Reveal";

export interface StaggerItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  index: number;
  direction?: RevealDirection;
  duration?: number;
  distance?: number;
  scale?: boolean;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

export default function StaggerItem({
  children,
  index,
  direction = "up",
  duration = 0.6,
  distance = 20,
  scale = false,
  className = "",
  as: Component = "div",
  style = {},
  ...rest
}: StaggerItemProps) {
  const { isVisible, staggerDelay, baseDelay, prefersReducedMotion } =
    useStaggerContext();

  if (prefersReducedMotion) {
    return (
      <Component className={className} style={style} {...rest}>
        {children}
      </Component>
    );
  }

  const delay = baseDelay + index * staggerDelay;

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
    <Component className={className} style={animationStyle} {...rest}>
      {children}
    </Component>
  );
}
