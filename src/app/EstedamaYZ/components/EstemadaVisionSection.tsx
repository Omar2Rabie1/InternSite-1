import Image from "next/image";
import { Leaf } from "lucide-react"; // لو بتستخدم lucide

export default function EstemadaVisionSection() {
  return (
    <section className="relative w-full h-[200px] flex items-center justify-center text-center">
      
      {/* Background Image */}
      <Image
        src="/vision-BnNN7303.jpg" 
        alt="Vision Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="w-6 h-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            OUR VISION
          </h2>
        </div>

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed font-medium">
          to be the pioneer enterprise that aims to bring the green & sustainable 
          approach to the community in the urban development for the domestic 
          and global market.
        </p>
      </div>
    </section>
  );
}
