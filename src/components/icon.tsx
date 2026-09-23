import React from "react";
import type { IconProps as IconifyIconProps } from "@iconify/react";

/**
 * Standard Lucide icon definitions from Iconify (@iconify-json/lucide)
 * for the 6 earthing products and the right arrow button.
 */
const iconSVGBodies: Record<string, string> = {
  "lucide:zap":
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/>',
  "lucide:settings-2":
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 17H5M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></g>',
  "lucide:leaf":
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 20a10 10 0 0 0 10-10a25.9 25.9 0 0 0-1.04-7.281a1 1 0 0 0-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0 0 11 20"/><path d="M2 21a5 5 0 0 1 2.911-4.544C7.613 15.212 8.351 15.24 11 13"/></g>',
  "lucide:layout-grid":
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></g>',
  "lucide:sun":
    '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g>',
  "lucide:flask-conical":
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"/>',
  "lucide:arrow-right":
    '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
};

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "ref"> {
  icon: string | IconifyIconProps["icon"];
}

/**
 * Universal Icon component that renders pre-compiled Iconify SVGs
 * directly into the SSR and Client tree without empty hydration spans.
 */
export function Icon({ icon, className, ...props }: IconProps) {
  const iconName = typeof icon === "string" ? icon : "";
  const body = iconSVGBodies[iconName];

  if (body) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        dangerouslySetInnerHTML={{ __html: body }}
        aria-hidden="true"
        {...props}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * Centralized Iconify icon identifiers for product cards and actions.
 * Selected based on Pratiksha's 6 industrial earthing products.
 */
export const productIcons = {
  // Product 1: Copper Bonded Chemical Earthing Electrodes
  copperBonded: "lucide:zap",

  // Product 2: Pure Copper & GI Earthing Accessories
  hardwareAccessories: "lucide:settings-2",

  // Product 3: Industrial Substation Grounding Grid
  substationGrid: "lucide:leaf",

  // Product 4: Commercial Earth Busbars & Distribution
  commercialBusbars: "lucide:layout-grid",

  // Product 5: Solar PV Plant Grounding Systems
  solarGrounding: "lucide:sun",

  // Product 6: Advanced Maintenance-Free Backfill
  backfillCompound: "lucide:flask-conical",

  // Action arrow icon for circular card button
  arrowRight: "lucide:arrow-right",
} as const;

export type ProductIconName = (typeof productIcons)[keyof typeof productIcons];
