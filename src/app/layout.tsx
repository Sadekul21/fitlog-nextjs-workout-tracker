import type { Metadata } from "next";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/shared/Navbar";
import AppProvider from "@/providers/AppProviders";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "FitLog",
  description:
    "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <AppProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
