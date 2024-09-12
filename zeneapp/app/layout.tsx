import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Zene App",
  description: "Zene Applikáció",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${GeistSans.className} antialiased bg-black text-white flex flex-col justify-between min-h-screen`}
      >
        <header className="w-full bg-black border-b border-b-gray-600 px-6 py-1">
            <Link href="/" className="font-semibold">Zene App</Link>
        </header>

        <main>
            {children}
        </main>

        <footer className="w-full bg-black border-t border-t-gray-600 py-1">
            <p className="text-gray-400 text-center text-sm">Copyright &copy; {new Date().getFullYear()}. None of the musics owned by me.</p>
        </footer>
      </body>
    </html>
  );
}
