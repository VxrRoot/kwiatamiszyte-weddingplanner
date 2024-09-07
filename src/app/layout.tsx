import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

const libreDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Wedding Planner Szczecin - Profesjonalna Organizacja Ślubów i Wesel",
  description:
    "Profesjonalny wedding planner w Szczecinie. Zajmujemy się kompleksową organizacją ślubów i wesel, dbając o każdy szczegół, aby ten dzień był niezapomniany. Skontaktuj się z nami, aby stworzyć idealne wesele marzeń.",
  keywords:
    "wedding planner Szczecin, organizacja ślubów Szczecin, organizator wesel Szczecin, planowanie wesela Szczecin, śluby Szczecin, konsultant ślubny Szczecin, profesjonalny wedding planner, wesela marzeń Szczecin",
  robots: {
    index: isProduction ? true : false,
    follow: isProduction ? true : false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreDisplay.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
