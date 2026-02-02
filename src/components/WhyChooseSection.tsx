import Image from "next/image";

export default function WhyChooseSection() {
  return ( 
    <section id="about us" className="bg-[#FEF4E5]  px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-[#003B32] text-3xl md:text-4xl font-bold tracking-tight mb-6">
              WHY CHOOSE US
            </h2>
            <p className="text-[#003B32] text-lg leading-relaxed font-medium">
              YZ Group is a unique firm that is able to deliver supreme buildings
              services. Expressed in engineering, modeling, design review &
              rendering service enriched with the global up to date techniques.
              And maintaining a competitive selling price to elite customers in
              the Middle East and Africa.
            </p>
          </div>

          {/* Arched Image Container */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-t-full overflow-hidden shadow-sm">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

  {/* Image */}
  <div className="flex justify-start md:order-1 order-1">
    <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-t-full overflow-hidden shadow-sm">
      <Image
        src="/window1-DGRJhqWG (2).png"
        alt="Construction Crane"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="max-w-xl md:order-2 order-2">
    <h2 className="text-[#003B32] text-3xl md:text-4xl font-bold tracking-tight mb-6">
      ABOUT US
    </h2>
    <p className="text-[#003B32] text-lg leading-relaxed font-medium">
      YZ Group is a small developing enterprise, established in the Egyptian
      market in the year 2019 for buildings consultancy services, special
      construction for buildings and infrastructure along with the limited
      supply of special products.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}