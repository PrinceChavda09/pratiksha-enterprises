import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Pratiksha Earthing Solutions",
  description: "Advanced earthing and lightning protection solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}