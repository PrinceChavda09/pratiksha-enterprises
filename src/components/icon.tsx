"use client";

import React from "react";
import { Icon as IconifyIcon, addCollection, type IconProps as IconifyIconProps } from "@iconify/react";

// Pre-register icons with Iconify so they render immediately without CDN lag
try {
  addCollection({
    prefix: "roentgen",
    icons: {
      electricity: {
        body: '<path fill="currentColor" d="M8.5 2a.5.5 0 0 0-.42.229L4.088 8.217A.5.5 0 0 0 4.499 9H7.89l-.878 4.392a.5.5 0 0 0 .908.379l3.992-5.988A.5.5 0 0 0 11.501 7H8.11l.878-4.392A.5.5 0 0 0 8.5 2"/>',
      },
    },
  });

  addCollection({
    prefix: "icon-park-outline",
    width: 48,
    height: 48,
    icons: {
      "setting-config": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.5 10h-6m-8-4v8m0-4h-22m8 14h-8m16-4v8m22-4h-22m20 14h-6m-8-4v8m0-4h-22"/>',
      },
    },
  });

  addCollection({
    prefix: "boxicons",
    width: 24,
    height: 24,
    icons: {
      leaf: {
        body: '<path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z"/>',
      },
    },
  });

  addCollection({
    prefix: "lucide",
    width: 24,
    height: 24,
    icons: {
      "arrow-right": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
      },
      "layout-grid": {
        body: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
      },
      "sun": {
        body: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.73-12.73l-1.41 1.41"/>',
      },
      "flask-conical": {
        body: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
      },
    },
  });
} catch {
  // Ignored
}

export type IconProps = IconifyIconProps;

/**
 * Universal Icon component backed by Iconify with SSR enabled by default.
 */
export function Icon({ ssr = true, ...props }: IconProps) {
  return <IconifyIcon ssr={ssr} {...props} />;
}

/**
 * Reusable Iconify icon identifiers for product cards, actions, and UI elements.
 */
export const productIcons = {
  // Product 1: Copper Bonded Chemical Earthing Electrodes
  copperBonded: "roentgen:electricity",

  // Product 2: Pure Copper & GI Earthing Accessories
  hardwareAccessories: "icon-park-outline:setting-config",

  // Product 3: Industrial Substation Grounding Grid
  substationGrid: "boxicons:leaf",

  // Action arrow icon for circular buttons, links, and footer
  arrowRight: "lucide:arrow-right",
} as const;

export type ProductIconName = (typeof productIcons)[keyof typeof productIcons];

/**
 * Proper Iconify arrow component using @iconify/react directly.
 */
export function ArrowRightIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={productIcons.arrowRight}
      className={className}
      {...props}
    />
  );
}
