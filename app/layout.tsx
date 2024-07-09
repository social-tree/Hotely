import { Montserrat, Gothic_A1 } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import Navbar from "@/components/Shared/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Hotely",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const montserrat = Montserrat({ subsets: ["latin"] });
const gothic_A1 = Gothic_A1({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${gothic_A1.className}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
