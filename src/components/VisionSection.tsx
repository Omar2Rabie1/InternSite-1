import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative mb-40 mt-16 ">
      
   
      <div className="relative h-[450px] w-full overflow-hidden">
        <Image
          src="/vision_background-CINrixyI.jpg"
          alt="Vision Background"
          fill
          className="object-cover brightness-75 transition-transform duration-700 hover:scale-105"
        />
 
        <div className="absolute inset-0 bg-black/20"></div>
      </div>


    <div className="absolute left-1/2 bottom-0 
-translate-x-1/2 translate-y-1/2 
w-[85%] max-w-4xl 
bg-white border border-black 
p-6 md:p-8 
z-10 shadow-md">

  <div className="text-center mb-6">
    <h2 className="text-[#003B32] text-xl font-bold tracking-widest uppercase">
      OUR VISION
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
    
    <div className="text-center px-3">
      <p className="text-sm leading-relaxed text-black font-medium">
        To deliver unique urban design work for modern buildings and cities 
        according to the top-notch world wide building design techniques.
      </p>
    </div>

    <div className="text-center px-3 md:border-x border-gray-400">
      <p className="text-sm leading-relaxed text-black font-medium">
        Top notch quality for building services with innovative global touch.
      </p>
    </div>

    <div className="text-center px-3">
      <p className="text-sm leading-relaxed text-black font-medium">
        Presence in the Middle East and Africa markets comprising energy 
        efficient urban design and performance to our elite customers.
      </p>
    </div>

  </div>
</div>


    </section>
  );
}