"use client";

import React from "react";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

/**
 * Temporary placeholder logo asset sourced from existing Home page images.
 * You can easily replace this constant or individual client.logo entries
 * with the actual client logos whenever ready.
 */
const PLACEHOLDER_CLIENT_LOGO = "/images/pratiksha-logo.webp";

interface ClientItem {
  id: string;
  name: string;
  sector: string;
  logo?: string;
}

const clients: ClientItem[] = [
  {
    id: "ultratech-cement",
    name: "UltraTech Cement",
    sector: "Industrial Manufacturing",
    logo: "/home/Ultratech_Cement_Logo.png",
  },
  {
    id: "vantara-reliance",
    name: "Vantara Reliance",
    sector: "Wildlife & Infrastructure",
    logo: "/home/Vantara.png",
  },
  {
    id: "avadh-namakin",
    name: "Avadh Namakin",
    sector: "Food Processing",
    logo: "/home/Avadh-Namakin.png",
  },
  {
    id: "wings-building",
    name: "Wings Building",
    sector: "Commercial Real Estate",
    logo: "/home/Wings-Building.jfif",
  },
  {
    id: "aadhar-seva-kendra",
    name: "Aadhar Seva Kendra",
    sector: "Civic & Government",
    logo: "/home/Aadhar-Seva-Kendra.jfif",
  },
  {
    id: "getco",
    name: "GETCO",
    sector: "Power Transmission Utility",
    logo: "/home/GETCO.jfif",
  },
  {
    id: "gondal-civil-hospital",
    name: "Gondal Civil Hospital",
    sector: "Healthcare Infrastructure",
    logo: "/home/Gondal-Civil-Hospital.jpg",
  },
  {
    id: "ioc-petrol-pump",
    name: "IOC Petrol Pump",
    sector: "Fuel & Energy Retail",
    logo: "/home/IOC-Petrol-Pump.jpeg",
  },
  {
    id: "nyara-petrol-pump",
    name: "Nyara Petrol Pump",
    sector: "Fuel & Energy Retail",
    logo: "/home/Nyara-Petrol-Pump.jfif",
  },
  {
    id: "jetpur-jetlasar-railway-station",
    name: "Jetpur Jetlasar Railway Station",
    sector: "Rail Transportation",
    logo: "/home/Jetpur-Jetlasar-Railway-Station.jfif",
  },
];

export default function OurHappyClients() {
  return (
    <section
      id="happy-clients"
      aria-labelledby="clients-heading"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up" delay={0.1}>
          <div className="max-w-3xl mb-10 sm:mb-14 text-center md:text-left mx-auto md:mx-0">
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

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[var(--gray-color)] leading-relaxed">
              We are proud to support organizations across industrial,
              infrastructure, healthcare, railway, and commercial sectors with
              earthing solutions.
            </p>
          </div>
        </Reveal>

        {/* Clients Responsive Grid */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
        >
          {clients.map((client, idx) => (
            <StaggerItem key={client.id} index={idx} direction="up">
              <div className="h-full rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between items-center text-center hover:border-[var(--primary-color)]/40 hover:-translate-y-1 transition-all duration-300 group">
                {/* Client Company Logo Image Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-200/80 group-hover:border-[var(--primary-color)]/30 flex items-center justify-center p-2 mb-3 sm:mb-4 shadow-[0_1px_4px_rgba(15,23,42,0.04)] transition-all duration-300 group-hover:scale-105 shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={`${client.logo}`}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 48px, 56px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Client Name with neat wrapping for long names */}
                <div className="flex-1 flex items-center justify-center my-1 w-full">
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-heading)] group-hover:text-[var(--primary-color)] transition-colors duration-200 leading-snug break-words hyphens-auto">
                    {client.name}
                  </h3>
                </div>

                {/* Sector / Domain Tag */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 w-full">
                  <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider truncate max-w-full">
                    {client.sector}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
