import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen bg-white">
        <Header />
        <main className={`${inter.className}`}>{children}</main>
      </body>
    </html>
  );
}
