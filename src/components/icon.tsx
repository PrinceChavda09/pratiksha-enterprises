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
      "arrow-up-right": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7m0 0H7m10 0v10"/>',
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
      "star": {
        body: '<polygon fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      "star-fill": {
        body: '<polygon fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      "chevron-left": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18-6-6 6-6"/>',
      },
      "chevron-right": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18 6-6-6-6"/>',
      },
      "badge-check": {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2 2 4-4"/>',
      },
      "shield-check": {
        body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/></g>',
      },
      zap: {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/>',
      },
      factory: {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"/>',
      },
      truck: {
        body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></g>',
      },
      "quote": {
        body: '<path fill="currentColor" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>',
      },
    },
  });

  addCollection({
    prefix: "logos",
    width: 24,
    height: 24,
    icons: {
      "google-icon": {
        body: '<path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>',
      },
    },
  });
  addCollection({
    prefix: "akar-icons",
    width: 24,
    height: 24,
    icons: {
      "whatsapp-fill": {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413" clip-rule="evenodd"/>',
      },
      phone: {
        body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.2 29.2 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.46.46 0 0 1-.553.088a14.56 14.56 0 0 1-5.36-5.367a.46.46 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465"/>',
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

  // Right-side cross / diagonal up-right arrow (↗)
  arrowUpRight: "lucide:arrow-up-right",
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

/**
 * Right-side cross / diagonal arrow icon component (↗).
 */
export function ArrowUpRightIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={productIcons.arrowUpRight}
      className={className}
      {...props}
    />
  );
}

/**
 * Reusable review and testimonial icon identifiers backed by Iconify.
 */
export const reviewIcons = {
  star: "lucide:star",
  starFill: "lucide:star-fill",
  google: "logos:google-icon",
  chevronLeft: "lucide:chevron-left",
  chevronRight: "lucide:chevron-right",
  badgeCheck: "lucide:badge-check",
  quote: "lucide:quote",
} as const;

export type ReviewIconName = (typeof reviewIcons)[keyof typeof reviewIcons];

/**
 * High-performance Star Icon for reviews.
 */
export function StarIcon({
  className = "w-4 h-4",
  filled = true,
  ...props
}: Omit<IconProps, "icon"> & { filled?: boolean }) {
  return (
    <Icon
      icon={filled ? reviewIcons.starFill : reviewIcons.star}
      className={className}
      {...props}
    />
  );
}

/**
 * Official multi-color Google branding icon.
 */
export function GoogleIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={reviewIcons.google}
      className={className}
      {...props}
    />
  );
}

/**
 * Left navigation arrow for reviews slider.
 */
export function ChevronLeftIcon({
  className = "w-5 h-5",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={reviewIcons.chevronLeft}
      className={className}
      {...props}
    />
  );
}

/**
 * Right navigation arrow for reviews slider.
 */
export function ChevronRightIcon({
  className = "w-5 h-5",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={reviewIcons.chevronRight}
      className={className}
      {...props}
    />
  );
}

/**
 * Verified reviewer badge check icon.
 */
export function BadgeCheckIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={reviewIcons.badgeCheck}
      className={className}
      {...props}
    />
  );
}

/**
 * Reusable contact channels icons.
 */
export const contactIcons = {
  whatsapp: "akar-icons:whatsapp-fill",
  phone: "akar-icons:phone",
} as const;

export type ContactIconName = (typeof contactIcons)[keyof typeof contactIcons];

/**
 * WhatsApp filled brand icon from akar-icons.
 */
export function WhatsAppIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={contactIcons.whatsapp}
      className={className}
      {...props}
    />
  );
}

/**
 * Phone icon from akar-icons.
 */
export function PhoneIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return (
    <Icon
      icon={contactIcons.phone}
      className={className}
      {...props}
    />
  );
}

/**
 * Shield check verification icon.
 */
export function ShieldCheckIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return <Icon icon="lucide:shield-check" className={className} {...props} />;
}

/**
 * High-voltage electrical lightning / conductivity icon.
 */
export function ZapIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return <Icon icon="lucide:zap" className={className} {...props} />;
}

/**
 * Manufacturing plant / industrial factory icon.
 */
export function FactoryIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return <Icon icon="lucide:factory" className={className} {...props} />;
}

/**
 * Logistics and pan-India dispatch truck icon.
 */
export function TruckIcon({
  className = "w-4 h-4",
  ...props
}: Omit<IconProps, "icon">) {
  return <Icon icon="lucide:truck" className={className} {...props} />;
}



