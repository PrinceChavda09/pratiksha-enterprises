import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Pratiksha Enterprises | Advanced Earthing & Grounding Solutions",
  description:
    "Safeguard your industrial infrastructure, transmission grids, and commercial assets with high-performance chemical earthing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen bg-[#070e14] text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}