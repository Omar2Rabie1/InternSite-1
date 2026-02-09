import Image from "next/image";

export default function EstemadaVisionSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/vision-BnNN7303.jpg"
        alt="Vision Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay خفيف عشان النص يبان */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-5 md:px-10 text-white">

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image
            src="/custom-icon.svg"
            alt="icon"
            width={35}
            height={35}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            OUR VISION
          </h2>
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-2xl leading-relaxed md:leading-loose">
          to be the pioneer enterprise that aims to bring the green & sustainable
          approach to the community in the urban development for the domestic
          and global market.
        </p>

      </div>
    </section>
  );
}
