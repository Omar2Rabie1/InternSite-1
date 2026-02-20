import Image from "next/image";
import { Mochiy_Pop_One } from "next/font/google";

const mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ServicesSection() {
  return (

<section id="service" className="py-20 bg-[#d5dad0]">
  <div className="max-w-7xl mx-auto px-4 md:px-16">

    {/* Title */}
    <h2
      className={`text-center text-4xl md:text-4xl font-medium text-[#0E3B34] mb-20`}
    >
      OUR SERVICES
    </h2>

    <div className="space-y-16">

      {/* MEP DESIGN - Left */}
      <div className="flex items-start gap-6 md:gap-8">
        <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0">
          <Image
            src="/mep-design-CufIJCrC.png"
            alt="MEP DESIGN"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-medium ${mochiy.className} text-[#0E3B34] mb-3`}>
            MEP DESIGN
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>
                MEP design work for buildings & infrastructure with the top-notch quality and according to the latest innovative techniques in accordance to the global codes.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* DESIGN REVIEW - Right */}
      <div className="flex flex-row-reverse items-start gap-6 md:gap-8">
        <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0">
          <Image
            src="/design-review-CYR9KcCT.png"
            alt="DESIGN REVIEW"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex-1 ml-8 md:ml-36">
          <h3 className={`text-xl md:text-2xl font-medium ${mochiy.className} text-[#0E3B34] mb-3`}>
            DESIGN REVIEW
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>
                Design review in neat details for verification of MEP systems prior to tender stage.
              </span>
            </li>

            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>
                Design review prior to the construction stage for the verification to the client requirement against the delivered design packages by the design firms.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* SHOP DRAWING - Left */}
      <div className="flex items-start gap-6 md:gap-8">
        <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0">
          <Image
            src="/shop-drawing-CsPdZ061.png"
            alt="SHOP DRAWING"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-medium ${mochiy.className} text-[#0E3B34] mb-3`}>
            SHOP DRAWING
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>Shop drawing 2D CAD enriched with installation details.</span>
            </li>

            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>Shop drawing 3D Revit with LOD 450.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BIM MODELING - Right */}
      <div className="flex flex-row-reverse items-start gap-6 md:gap-8">
        <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0">
          <Image
            src="/bim-modeling-DlxwX07w.png"
            alt="BIM MODELING"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex-1 ml-8 md:ml-36">
          <h3 className={`text-xl md:text-2xl font-medium ${mochiy.className} text-[#0E3B34] mb-3`}>
            BIM MODELING
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>BIM modeling for all buildings & infra disciplines (Structure, Architecture & MEP) for the coordination purpose and services.</span>
            </li>

            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>
                Presentations to client prior to the construction stage to deliver an engineering work with zero clash and up to LOD 500.
              </span>
            </li>
          </ul>
        </div>
      </div>   
      
      {/* 3D Rendering - Left */}
      <div className="flex items-start gap-6 md:gap-8">
        <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0">
          <Image
            src="/3d-rendering-ETiVv9fk.png"
            alt="3D Rendering"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-medium ${mochiy.className} text-[#0E3B34] mb-3`}>
            3D Rendering
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
              <span>
                3D rendering work for buildings interior & exterior using 3D Max.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

);
}