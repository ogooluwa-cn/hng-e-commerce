// app/layout.tsx
import "./globals.css";
import { Geist_Mono, Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export const metadata = {
  title: "Audiophile - Ecommerce",
  description: "High-end audio products",
};

// ✅ Load Fonts Correctly (CSS variables + className)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // ✅ Ensure CSS variables register
      className={`${manrope.variable} ${manrope.className} ${geistMono.variable} ${geistMono.className}`}
    >
      {/* ✅ Font applied via Tailwind */}
      <body className="antialiased font-sans bg-[var(--background)] text-[var(--foreground)]">
        <ConvexClientProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
