"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroEstemada() {
  return (
    <section className="relative h-screen w-full ">

      {/* Background Image */}
      <Image
        src="/hero_pic-Dq3zpTMX (1).jpeg"
        alt="Construction Background"
        fill
        priority
        className="object-cover"
      />

 

      {/* Navbar */}
      <nav className=" backdrop-blur-xs  top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <div className="flex items-center gap-3 ms-16">
            <Image
              src="/estedama_logo-DC65PzFo.png"
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
            <li className="hover:text-orange-400 transition cursor-pointer"><a href="#Contact Us">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

      <h1 className="text-[50px] text-white ">Join The Green Side</h1>


        <Link
          href="#"
          className="mt-3 px-4  border-2 border-[#FFB906] text-[#FFB906] rounded-lg backdrop-blur-xl text-lg  "
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
