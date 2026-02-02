import Image from "next/image";
import { Leaf } from "lucide-react"; // لو بتستخدم lucide

export default function EstemadaVisionSection() {
  return (
    <section className="relative w-full h-[350px]  flex items-center justify-center text-center">
      
      {/* Background Image */}
      <Image
        src="/vision-BnNN7303.jpg" 
        alt="Vision Background"
        fill
        priority
        className="object-cover"
      />

      

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-6">
        <Image
  src="/custom-icon.svg"
  alt="icon"
  width={40}
  height={40}
/>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            OUR VISION
          </h2>
        </div>

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed font-[24px]">
          to be the pioneer enterprise that aims to bring the green & <br /> sustainable 
          approach to the community in the urban <br /> development for the domestic 
          and global market.
        </p>
      </div>
    </section>
  );
}
