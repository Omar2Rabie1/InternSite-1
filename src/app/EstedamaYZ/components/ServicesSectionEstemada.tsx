"use client";

import Image from "next/image";

const services = [
  { image: "/service1-DGV8Kl-1.png" },
  { image: "/service2-BFWroHEL.png" },
  { image: "/service3-DQHDwzAG.png" },
  { image: "/service4-2C9rNqBB.png" },
];

export default function ServicesSectionEstemada() {
  return (
    <section
      id="service"
      className="bg-[#7B8F78] py-16 md:py-20 px-4 md:px-16"
    >
      <h2 className="text-center text-white text-3xl md:text-5xl font-bold mb-12 md:mb-16">
        OUR SERVICES
      </h2>

      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden"
          >
            <Image
              src={service.image}
              alt={`Service ${index + 1}`}
              width={800}
              height={500}
              className="w-full h-[150px] md:h-[260px] object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
