"use client";
import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations";

/**
 * Fallback placeholder logo asset.
 */
const PLACEHOLDER_CLIENT_LOGO = "/images/pratiksha-logo.webp";

interface ClientItem {
  id: string;
  name: string;
  sector?: string;
  logo: string;
}

const clients: ClientItem[] = [
  {
    id: "ultratech-cement",
    name: "UltraTech Cement",
    logo: "/home/Ultratech_Cement_Logo.png",
  },
  {
    id: "vantara-reliance",
    name: "Vantara Reliance",
    logo: "/home/Vantara.png",
  },
  {
    id: "avadh-namakin",
    name: "Avadh Namakin",
    logo: "/home/Avadh-Namakin.png",
  },
  {
    id: "wings-building",
    name: "Wings Building",
    logo: "/home/Wings-Building.jfif",
  },
  {
    id: "aadhar-seva-kendra",
    name: "Aadhar Seva Kendra",
    logo: "/home/Aadhar-Seva-Kendra.jfif",
  },
  {
    id: "getco",
    name: "GETCO",
    logo: "/home/GETCO.jfif",
  },
  {
    id: "gondal-civil-hospital",
    name: "Gondal Civil Hospital",
    logo: "/home/Gondal-Civil-Hospital.jpg",
  },
  {
    id: "ioc-petrol-pump",
    name: "IOC Petrol Pump",
    logo: "/home/IOC-Petrol-Pump.jpeg",
  },
  {
    id: "nyara-petrol-pump",
    name: "Nyara Petrol Pump",
    logo: "/home/Nyara-Petrol-Pump.jfif",
  },
  {
    id: "jetpur-jetlasar-railway-station",
    name: "Jetpur Jetlasar Railway Station",
    logo: "/home/Jetpur-Jetlasar-Railway-Station.jfif",
  },
];

export default function OurHappyClients() {
  // Visually duplicate the client sequence for a completely seamless, infinite loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section
      id="happy-clients"
      aria-labelledby="clients-heading"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Section Header */}
        <Reveal direction="up" delay={0.1}>
          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            {/* Eyebrow */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 mb-3">
              <span className="w-7 sm:w-8 h-[2px] bg-[var(--primary-color)] rounded-full shrink-0" />
              <span className="text-xs sm:text-[14px] font-bold text-[var(--primary-color)] tracking-wider sm:tracking-widest uppercase">
                OUR HAPPY CLIENTS
              </span>
            </div>

            {/* Main Heading */}
            <h2
              id="clients-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-heading)] leading-tight tracking-tight"
            >
              Trusted by Organizations{" "}
              <span className="text-[var(--primary-color)]">
                Across Industries
              </span>
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Continuous Horizontal Logo Marquee Slider */}
      <div
        className="client-marquee-container relative w-full overflow-hidden flex py-2"
        aria-label="Client logos carousel"
      >
        {/* Left & Right gradient edge masks for smooth fade-in / fade-out effect */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 bg-gradient-to-l from-white via-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* Primary Track */}
        <div className="client-marquee-track">
          {marqueeClients.map((client, idx) => (
            <div
              key={`track-1-${client.id}-${idx}`}
              className="px-2.5 sm:px-3 md:px-3.5 shrink-0"
            >
              <div className="w-40 sm:w-48 md:w-56 h-20 sm:h-24 md:h-26 rounded-xl sm:rounded-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo || PLACEHOLDER_CLIENT_LOGO}
                    alt={`${client.name} logo`}
                    height={120}
                    width={120}
                    className="object-contain object-center transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Track for Seamless Infinite Loop */}
        <div className="client-marquee-track" aria-hidden="true">
          {marqueeClients.map((client, idx) => (
            <div
              key={`track-2-${client.id}-${idx}`}
              className="px-2.5 sm:px-3 md:px-3.5 shrink-0"
            >
              <div className="w-40 sm:w-48 md:w-56 h-20 sm:h-24 md:h-26 rounded-xl sm:rounded-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo || PLACEHOLDER_CLIENT_LOGO}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                    className="object-contain object-center transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-marquee-track {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          animation: clientMarqueeScroll 38s linear infinite;
          will-change: transform;
        }

        /* Essential requirement: Hovering pauses the complete slider */
        .client-marquee-container:hover .client-marquee-track {
          animation-play-state: paused;
        }

        @keyframes clientMarqueeScroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
