import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative py-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/vision_background-CINrixyI.jpg"
          alt="Vision Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#003B32] mb-16">
          OUR VISION
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center items-start">

          {/* Column 1 */}
          <div className="px-6 md:border-r-4 md:border-black">
            <p className="text-base md:text-lg leading-relaxed font-medium text-black">
              To deliver unique urban design work for modern buildings and
              cities according to the top-notch world wide building design
              techniques.
            </p>
          </div>

          {/* Column 2 */}
          <div className="px-6 md:border-r-4 md:border-black">
            <p className="text-base md:text-lg leading-relaxed font-medium text-black">
              Top notch quality for building services with innovative global
              touch.
            </p>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <p className="text-base md:text-lg leading-relaxed font-medium text-black">
              Presence in the Middle East and Africa markets comprising energy
              efficient urban design and performance to our elite customers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
