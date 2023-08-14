import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Ben",
  description: "Benjamins developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></link>
      </head>
      <body
        className={
          "min-h-screen flex flex-col text-slate-700 " + poppins.className
        }
      >
        <header className="flex p-4 sm:p-5 border-b">
          <div className="flex font-medium text-xs sm:text-sm items-center max-w-[900px] mx -auto w-full">
            <Link href={"/"} className="hidden sm:inline">
              Benjamin Rew
            </Link>
            <Link href={"/"} className="sm:hidden">
              BR
            </Link>
          </div>
        </header>
        {children}
        <footer className="flex p-4 py-16 text-xs text-slate-600 sm:text-sm border-t items-center justify-center flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <a
              download
              href={"/benjamin_rew_cv.pdf"}
              className="cursor-pointer hover:opacity-60 duration-200"
            >
              PDF Resume
            </a>
            <p>|</p>
            <Link
              href={"/projects"}
              className="cursor-pointer hover:opacity-60 duration-200"
            >
              Projects
            </Link>
            <p>|</p>
            <a className="cursor-pointer hover:opacity-60 duration-200">Blog</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg sm:text-xl">
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href="https://www.linkedin.com/in/benjaminrew23/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="cursor-pointer hover:opacity-60 duration-200" href="">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href="https://github.com/rewbens"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
