"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full ">

      {/* Background Image */}
      <Image
        src="/homesection_background-D4LjzvDo.jpg"
        alt="Construction Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navbar */}
      <nav className=" backdrop-blur-md bg-black/30 top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <div className="flex items-center gap-3 ms-16">
            <Image
              src="/logo_yz_2-PfnMos6e.png"
              alt="YZ Group Logo"
              width={120}
              height={60}
              priority
            />
          </div>

          {/* Menu */}
          <ul className="hidden md:flex gap-16 text-white text-lg font-medium me-20">
            <li  className="hover:text-orange-400 transition cursor-pointer">Home</li>
            <li className="hover:text-orange-400 transition cursor-pointer"><Link href="#service">Services</Link></li>
            <li className="hover:text-orange-400 transition cursor-pointer"><Link href="#about us">About US</Link></li>
            <li className="hover:text-orange-400 transition cursor-pointer">     <a target="_blank" href="/EstedamaYZ">Estedama YZ</a > </li>
            <li className="hover:text-orange-400 transition cursor-pointer"><a href="#Contact Us">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="font-mochiy text-white text-5xl md:text-7xl leading-tight">
          Building a Solid Foundation
        </h1>

        <p className="mt-6 text-white text-lg md:text-2xl max-w-2xl">
          Your Ultimate Guide to Construction Materials.
        </p>

        <Link
          href="#"
          className="mt-10 px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg text-lg hover:bg-orange-400 hover:text-white transition duration-300"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
