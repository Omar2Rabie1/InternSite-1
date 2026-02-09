"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export function ContactAndAcademy() {
  return (
    <section id="Contact Us" className="bg-white py-20 px-4 md:px-6">
      <div className="mx-auto relative max-w-2xl md:max-w-2xl">

        {/* =========================
            MOBILE/TABLET (SMALL) => LIKE IMAGE
            ========================= */}
        <div className="md:hidden bg-[#E6EFD9] py-10 px-4">
          <div className="grid grid-cols-2 gap-6 items-start">

            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold mb-1">Get In Touch</h2>
              <p className="text-sm mb-6">Feel free to drop us a line below</p>

              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full h-[56px] px-5 rounded-3xl bg-white outline-none text-sm"
                />

                <textarea
                  placeholder="Write us a message"
                  rows={8}
                  className="w-full px-5 py-4 rounded-3xl bg-white outline-none text-sm resize-none"
                />

                <button
                  type="submit"
                  className="border-2 border-[#f39200] text-[#f39200] px-8 py-2 rounded-2xl font-bold"
                >
                  Contact us
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="pt-16 space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#0F5132] w-6 h-6 mt-1" />
                <p className="text-sm leading-relaxed">
                  81 Mohamed Mekled St. <br />
                  Nasr City 8th Zone, <br />
                  Cairo, Egypt
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#0F5132] w-6 h-6" />
                <p className="text-sm">+201123897507</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#0F5132] w-6 h-6" />
                <p className="text-sm">info@YZgroup.co</p>
              </div>
            </div>

          </div>
        </div>

        {/* =========================
            DESKTOP (MD+) => YOUR CURRENT DESIGN
            ========================= */}
        <div className="hidden md:block">
          <div className="bg-[#E2EAD6] rounded-xl p-8 md:p-16 ml-0 md:ml-32 min-h-[400px] flex flex-col items-center md:items-start justify-center">
            <div className="md:pl-20 w-full max-w-lg">
              <h2 className="text-2xl font-bold text-black mb-1">Get In Touch</h2>
              <p className="text-gray-700 mb-6">
                feel free to drop us a line below
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full p-3 rounded-lg h-[50px] border border-gray-300 bg-white focus:ring-1 focus:ring-green-500 outline-none"
                />
                <textarea
                  placeholder="Write us a message"
                  rows={8}
                  cols={30}
                  className="w-full p-3 rounded-md border border-gray-300 bg-white focus:ring-1 focus:ring-green-500 outline-none"
                ></textarea>
                <button className="border-2 border-[#f39200] text-[#f39200] px-6 py-1 rounded-md cursor-pointer font-bold">
                  Contact us
                </button>
              </form>
            </div>
          </div>

          <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-[258.167px] h-[400px] bg-[#D6E0C4] border border-black rounded-xl p-7 shadow-xl">
            <h3 className="text-xl font-bold text-center mb-8">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#003B32] w-5 h-5 shrink-0 mt-1" />
                <p className="text-sm">
                  81 Mohamed Mekled St. Nasr City 8th Zone, Cairo, Egypt
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#003B32] w-5 h-5" />
                <p className="text-sm">+201123897507</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#003B32] w-5 h-5" />
                <p className="text-sm">info@YZgroup.co</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm mb-3">or contact us via:</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-pink-500 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://wa.me/201123897507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===== Academy Section (same as yours) ===== */}
      <div className="mt-32 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-6">
          <span className="text-2xl font-medium tracking-[0.2em]">YZ ACADEMY</span>
          <div className="relative w-36 h-24">
            <Image
              src="/academy_logo-DuUIRCv9.png"
              alt="Academy Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-medium tracking-[0.2em]">COMING SOON</span>
        </div>
        <div className="inline-block border-t-2 border-b-2 border-black py-2 px-10">
          <p className="text-lg font-medium">Training to Individuals and Corporate</p>
        </div>
      </div>
    </section>
  );
}
