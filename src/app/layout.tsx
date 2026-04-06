import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "José Salazar | Orchestral Conductor",
  description: "Jette Parker Ballet Conductor at the Royal Opera House London. Dudamel Fellow with the Los Angeles Philharmonic.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
