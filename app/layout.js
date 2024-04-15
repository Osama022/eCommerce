import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Haven",
  description: "Tech Haven website is an online platform that enables users to buy products over the internet. It provides a convenient and accessible way for customers to browse, select, and purchase items from a wide range of categories. With integrated shopping carts, secure payment gateways, and streamlined checkout processes, ecommerce websites offer a seamless online shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
        <NavBar />
        {children}
      <Footer />
        </section>
      </body>
    </html>
  );
}
