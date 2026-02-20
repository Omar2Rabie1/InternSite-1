import Image from "next/image";

export default function VisionSection() {
  return (
    /* أضفنا overflow-visible للسكشن عشان البوكس يقدر يخرج براه لتحت */
    <section className="relative h-[450px] flex items-center justify-center overflow-visible mb-32">

      {/* Background with darker overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/vision_background-CINrixyI.jpg" 
          alt="Vision Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* The White Box */}
      {/* max-w-4xl لتقليل العرض | translate-y-1/2 لنزوله لنصف المسافة تحت */}
      <div className="relative max-w-4xl w-full bg-white border-[2px] border-black p-10 md:p-14 shadow-xl translate-y-[40%]">
        
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#003B32] mb-12 tracking-wide">
          OUR VISION
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">

          {/* Column 1 */}
          <div className="px-6 md:border-r-[3px] border-black flex items-center">
            <p className="text-sm md:text-base leading-relaxed text-black text-center w-full">
              To deliver unique urban design work for modern buildings and
              cities according to the top-notch world wide building design
              techniques.
            </p>
          </div>

          {/* Column 2 */}
          <div className="px-6 md:border-r-[3px] border-black flex items-center">
            <p className="text-sm md:text-base leading-relaxed text-black text-center w-[60%] text-center ms-7">
              Top notch quality for building services with innovative global
              touch.
            </p>
          </div>

          {/* Column 3 */}
          <div className="px-6 flex items-center">
            <p className="text-sm md:text-base leading-relaxed text-black text-center w-full">
              Presence in the Middle East and Africa markets comprising energy
              efficient urban design and performance to our elite customers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}