"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <Image
        src="/homesection_background-D4LjzvDo.jpg"
        alt="Construction Background"
        fill
        priority
        className="object-cover"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <Image
            src="/logo_yz_2-PfnMos6e.png"
            alt="YZ Group Logo"
            width={120}
            height={60}
            priority
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
            <li className="hover:text-orange-400 transition">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-orange-400 transition">
              <Link href="#service">Services</Link>
            </li>
            <li className="hover:text-orange-400 transition">
              <Link href="#about">About Us</Link>
            </li>
            <li className="hover:text-orange-400 transition">
              <Link href="/EstedamaYZ" target="_blank">Estedama YZ</Link>
            </li>
            <li className="hover:text-orange-400 transition">
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white z-40"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 ${
          open ? "visible opacity-70" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-16 right-0 w-3/4 sm:w-1/2 bg-[#BBC9CF]  transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5 p-2 text-black text-xl font-medium mt-0">
            <Link href="#" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#service" onClick={() => setOpen(false)}>Services</Link>
            <Link href="#about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/EstedamaYZ" target="_blank"  onClick={() => setOpen(false)}>Estedama YZ</Link>
            <Link href="#contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Building a Solid Foundation
        </h1>

        <p className="mt-6 text-white text-base sm:text-lg md:text-2xl max-w-2xl font-medium">
          Your Ultimate Guide to Construction Materials.
        </p>

        <Link
          href="#contact"
          className="mt-60 px-8 py-0 border-2 border-[#f39200] text-[#f39200] rounded-lg text-lg "
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
