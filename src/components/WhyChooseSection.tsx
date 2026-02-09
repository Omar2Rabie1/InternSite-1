import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section
      id="about-us"
      className="bg-[#FEF4E5] py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ========== WHY CHOOSE US ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-[#003B32] text-3xl md:text-4xl font-bold mb-6">
              WHY CHOOSE US
            </h2>

            <p className="text-[#003B32] text-base md:text-lg leading-relaxed font-medium">
              YZ Group is a unique firm that is able to deliver supreme
              buildings services. Expressed in engineering, modeling, design
              review & rendering service enriched with the global up to date
              techniques. And maintaining a competitive selling price to elite
              customers in the Middle East and Africa.
            </p>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-t-full shadow-md">
              <Image
                src="/window2-CdDVQaQ4.png"
                alt="Construction Crane"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ========== ABOUT US ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex justify-center md:justify-start md:order-1">
            <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-t-full shadow-md">
              <Image
                src="/window1-DGRJhqWG (2).png"
                alt="About YZ Group"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl text-center md:text-left md:order-2">
            <h2 className="text-[#003B32] text-3xl md:text-4xl font-bold mb-6">
              ABOUT US
            </h2>

            <p className="text-[#003B32] text-base md:text-lg leading-relaxed font-medium">
              YZ Group is a small developing enterprise, established in the
              Egyptian market in the year 2019 for buildings consultancy
              services, special construction for buildings and infrastructure
              along with the limited supply of special products.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
