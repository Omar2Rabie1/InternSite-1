"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HeroEstemada() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <Image
        src="/hero_pic-Dq3zpTMX (1).jpeg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <Image
            src="/estedama_logo-DC65PzFo.png"
            alt="Logo"
            width={120}
            height={60}
            priority
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-16 text-white text-lg font-medium">
            <li>Home</li>
            <li><Link href="#service">Services</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white z-40"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

      
        <div
          className={`md:hidden absolute top-[67px] right-0 
          w-[40vw] min-w-[220px]
          flex flex-col gap-6
          bg-[#ffffffb3] shadow-md
          z-20 p-6 text-black text-lg
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <Link href="#" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#service" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-[80px] font-bold text-white">
          Join The Green Side
        </h1>

        <Link
          href="#contact"
          className="mt-6 px-8 py-3 border-2 border-[#FFB906] text-[#FFB906] rounded-lg backdrop-blur-md text-lg"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
