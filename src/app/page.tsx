"use client";

import Image from "next/image";
import { useState } from "react";
import AboutSection from "@/components/aboutSection";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label:"Home"},
    { id: "about", label:"About"},
    { id: "experience", label:"Experience"},
    { id: "project", label:"project"},
    { id: "contact", label:"Contact"},
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-1000 shadow-lg fixed w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Portofolio
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:p-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HOME SECTION (HERO) */}
      <section
        id="home"
        className="scroll-mt-24 min-h-screen bg-black text-white flex items-center justify-center px-4 py-24"
        style={{
          backgroundImage: "url('/your-image-grid-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/80 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-50 h-50 rounded-full overflow-hidden border-2 border-white shadow-[0_0_20px_#3b82f6]">
            <Image
              src="/profile.png" 
              alt="Fathimah Azzahra Winarno"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mt-6">
            FATHIMAH AZZAHRA WINARNO
          </h1>
          <p className="text-lg sm:text-xl mt-2 font-semibold">
            FULL STACK DEVELOPER
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <main>
        <AboutSection />

        {/* Placeholder untuk section lainnya (bisa diganti nanti) */}
        <section
          id="experience"
          className="scroll-mt-24 min-h-screen flex items-center justify-center border-b"
        >
      <h2 className="text-4xl font-bold text-center">Experience Section</h2>
        </section>

      <section
          id="project"
          className="scroll-mt-24 min-h-screen flex items-center justify-center border-b"
        >
        <h2 className="text-4xl font-bold text-center">Project Section</h2>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 min-h-screen flex items-center justify-center border-b"
      >
        <h2 className="text-4xl font-bold text-center">Contact Section</h2>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full">
        <Footer container>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <FooterCopyright
              href="#"
              by="Flowbite™"
              year={2024}
              className="text-sm text-gray-500 dark:text-gray-400"
            />
            <FooterLinkGroup className="mt-3 sm:mt-0">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
        </Footer>
      </footer>
    </>
  );
}