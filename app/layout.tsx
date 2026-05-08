import type { Metadata } from "next";
import { Poppins, Inter, Damion } from "next/font/google";
import "./globals.css";
import Navbar from "./cmp/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./cmp/Footer";
import { siteConfig } from "./config/siteConfig";

const titleFont = Damion({ weight: "400", variable: "--font-title" });
const subtitleFont = Poppins({ subsets: ["latin"], weight: "500", variable: "--font-subtitle" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.shortDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${titleFont.variable} ${subtitleFont.variable} h-full antialiased`}
    >
      <body className="h-full" >
        <div id="background"
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/BluRoseBeauty_di_ElettraScarpellino.jpeg')"
            }}/>
        <div className="fixed inset-0 -z-10 bg-black/30" />

        <Navbar className="fixed top-0 left-0 z-10 w-full p-3 transition duration-300 flex flex-row justify-between items-center
                    hover:text-(--foreground-secondary) hover:bg-(--background-secondary) hover:shadow-lg group" />
        <Toaster position="top-center" toastOptions={
          {
            duration: 1500,
            style: {
              color: "var(--foreground)",
              background: "var(--background)",
              border: ".25rem solid var(--foreground)",
              textAlign: "center",
            }
            
          }
        } />

        <main className="py-25 p-3" >
          {children}
        </main> 

        <Footer className="fixed bottom-0 w-full px-5 py-2 z-10 transition duration-300
          bg-(background-secondary) text-(--foreground-secondary)
          lg:bg-(transparent) lg:hover:bg-(--background-secondary)
          text-left lg:text-(--foreground) lg:hover:text-(--foreground-secondary)" />
      </body>
    </html>
  );
}
