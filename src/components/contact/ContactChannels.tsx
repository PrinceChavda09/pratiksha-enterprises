import React from "react";

export default function ContactChannels() {
  const channels = [
    {
      title: "Direct Sales & Quotes",
      badge: "Fast Dispatch",
      subtitle: "Instant phone & WhatsApp assistance",
      primaryText: "+91 93138 88465",
      primaryHref: "tel:+919313888465",
      actionText: "Call Now",
      whatsappHref: "https://wa.me/919313888465?text=Hello%20Pratiksha%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20earthing%20solutions.",
      whatsappText: "Chat on WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Technical Consultation",
      badge: "Engineering Support",
      subtitle: "Soil resistivity & earthing specification",
      primaryText: "pratikshaenterprises.sales@gmail.com",
      primaryHref: "mailto:pratikshaenterprises.sales@gmail.com",
      actionText: "Send Email",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Manufacturing & Plant",
      badge: "Rajkot Hub",
      subtitle: "305, Royal Complex, Dhebar Rd, Millpara, Bhutkhana Chowk, Rajkot, Gujarat 360002",
      primaryText: "Visit Our Facilities",
      primaryHref: "#map-section",
      actionText: "View on Map",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Operating Hours",
      badge: "Mon – Sat",
      subtitle: "Fast response during active factory hours",
      primaryText: "9:00 AM – 7:30 PM",
      secondaryText: "Sunday: Closed (Emergency dispatch available)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {channels.map((channel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(8,117,138,0.1)] hover:border-[var(--primary-color)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header with Icon and Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] text-[var(--primary-color)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {channel.icon}
                </div>
                <span className="text-[11px] font-bold text-[var(--primary-color)] bg-[color-mix(in_srgb,var(--primary-color)_8%,transparent)] px-2.5 py-1 rounded-full border border-[color-mix(in_srgb,var(--primary-color)_20%,transparent)]">
                  {channel.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-[#0f172a] mb-1.5 group-hover:text-[var(--primary-color)] transition-colors">
                {channel.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {channel.subtitle}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {channel.primaryHref ? (
                <a
                  href={channel.primaryHref}
                  className="inline-flex items-center justify-between text-sm font-semibold text-[var(--primary-color)] hover:text-[#065e6f] transition-colors"
                >
                  <span className="truncate">{channel.actionText || channel.primaryText}</span>
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <div className="text-sm font-semibold text-[#0f172a]">
                  {channel.primaryText}
                </div>
              )}

              {channel.whatsappHref && (
                <a
                  href={channel.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200/80"
                >
                  <span>💬</span>
                  <span>{channel.whatsappText}</span>
                </a>
              )}

              {channel.secondaryText && (
                <span className="text-[11px] text-slate-400">
                  {channel.secondaryText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
