import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Shoe Store",
    description: "desc",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col px-0 md:px-24 lg:px-40 [&>*]:w-full justify-between">
                    <Nav />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
