"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function GetInTouch() {
  return (
    <section className="py-16 px-6 bg-[#E6EFD9]">

      {/* MOBILE + TABLET */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-8 items-start">

          {/* Left - Form */}
          <div className="bg-[#739882] rounded-2xl p-6 w-[110%]">

            <h2 className="text-2xl font-bold text-white mb-2">
              Get In Touch
            </h2>

            <p className="text-white mb-6 text-sm">
              Feel free to drop us a line below
            </p>

            <form className="space-y-5">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="w-full h-[55px] px-5 rounded-3xl bg-white outline-none text-sm"
              />

              <textarea
                placeholder="Write us a message"
                rows={6}
                className="w-full px-5 py-4 rounded-3xl bg-white outline-none text-sm resize-none"
              />

              <button className="border-2 border-[#FFB906] text-[#FFB906] px-10 py-2 rounded-xl font-bold">
                Send
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="pt-16 space-y-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#739882] w-6 h-6 mt-1" />
              <p className="text-sm leading-relaxed">
                81 Mohamed Mekled St. <br />
                Nasr City 8th Zone, <br />
                Cairo, Egypt
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#739882] w-6 h-6" />
              <p className="text-sm">+201123897507</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#739882] w-6 h-6" />
              <p className="text-sm">info@YZgroup.co</p>
            </div>
          </div>

        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="max-w-4xl mx-auto relative">

       
          <div className="bg-[#739882] rounded-2xl p-16 ml-40 min-h-[420px] flex flex-col justify-center w-[650px]">

            <div className="pl-24 w-full">
              <h2 className="text-3xl font-bold text-white mb-2">
                Get In Touch
              </h2>

              <p className="text-white mb-8">
                Feel free to drop us a line below
              </p>

              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full p-3 rounded-3xl bg-white outline-none"
                />
                <textarea
                  placeholder="Write us a message"
                  rows={5}
                  className="w-full p-5 h-44 rounded-3xl bg-white outline-none"
                ></textarea>
                <button className="border-2 border-[#FFB906] text-[#FFB906] px-16 py-2 rounded-xl font-bold">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Side Card */}
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[260px] bg-[#D6E0C4] border border-black rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-center mb-8">
              Contact Us
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#739882] w-5 h-5 mt-1" />
                <p className="text-sm">
                  81 Mohamed Mekled St. Nasr City 8th Zone, Cairo, Egypt
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#739882] w-5 h-5" />
                <p className="text-sm">+201123897507</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#739882] w-5 h-5" />
                <p className="text-sm">info@YZgroup.co</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
