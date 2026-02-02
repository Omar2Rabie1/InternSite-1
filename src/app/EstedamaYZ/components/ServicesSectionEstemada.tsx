"use client";

import Image from "next/image";

const services = [
  {
    image: "/service1-DGV8Kl-1.png",
  },
  {
    image: "/service2-BFWroHEL.png",
  },
  {
    image: "/service3-DQHDwzAG.png",
  },
  {
    image: "/service4-2C9rNqBB.png",
  },
];

export default function ServicesSectionEstemada() {
  return (
    <section
      id="service"
      className="bg-[#7B8F78] py-20 px-6 md:px-16"
    >
      <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16">
        OUR SERVICES
      </h2>

   
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={service.image}
              alt={`Service ${index + 1}`}
              width={800}
              height={500}
              className="max-w-[400px] h-[240px] object-cover transition duration-500 group-hover:scale-110"
            />   
          </div>
        ))}
      </div>
    </section>
  );
}