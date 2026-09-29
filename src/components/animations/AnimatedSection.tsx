"use client";

import React, { type ReactNode, type CSSProperties } from "react";
import Reveal, { type RevealDirection } from "./Reveal";

export interface AnimatedSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  id?: string;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  id,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 24,
  style = {},
  ...rest
}: AnimatedSectionProps) {
  return (
    <Reveal
      as="section"
      id={id}
      direction={direction}
      delay={delay}
      duration={duration}
      distance={distance}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Reveal>
  );
}
