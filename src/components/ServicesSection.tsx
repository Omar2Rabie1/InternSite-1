import Image from "next/image";
import { Mochiy_Pop_One } from "next/font/google";

const mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ServicesSection() {
  return (
    <section id="service" className="py-20 bg-[#EFF5E9]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">

        {/* Title */}
        <h2
          className={`text-center text-3xl md:text-5xl ${mochiy.className} text-[#0E3B34] mb-20`}
        >
          OUR SERVICES
        </h2>

        <div className="space-y-24">

          {/* 1️⃣ MEP DESIGN */}
          <div className="flex flex-row items-start gap-6 md:gap-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0">
              <Image
                src="/mep-design-CufIJCrC.png"
                alt="MEP DESIGN"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex-1">
              <h3 className={`text-xl md:text-3xl font-bold ${mochiy.className} text-[#0E3B34] mb-4`}>
                MEP DESIGN
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5  bg-black rounded-full shrink-0"></span>
                  <span className="mx-auto">
                    MEP design work for buildings & infrastructure with the top-notch quality and according to the latest innovative techniques in accordance to the global codes.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2️⃣ DESIGN REVIEW */}
          <div className="flex flex-row-reverse items-start gap-6 md:gap-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0">
              <Image
                src="/design-review-CYR9KcCT.png"
                alt="DESIGN REVIEW"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex-1 mx-auto">
              <h3 className={`text-xl md:text-3xl font-bold ${mochiy.className} text-[#0E3B34] mb-4`}>
                DESIGN REVIEW
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span >
                    Design review in neat details for verification of MEP systems prior to tender stage.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span >
                    Design review prior to the construction stage for the verification to the client requirement against the delivered design packages by the design firms.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3️⃣ SHOP DRAWING */}
          <div className="flex flex-row items-start gap-6 md:gap-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0">
              <Image
                src="/shop-drawing-CsPdZ061.png"
                alt="SHOP DRAWING"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex-1 mx-auto">
              <h3 className={`text-xl md:text-3xl font-bold ${mochiy.className} text-[#0E3B34] mb-4`}>
                SHOP DRAWING
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span>Shop drawing 2D CAD enriched with installation details.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span>Shop drawing 3D Revit with LOD 450.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4️⃣ BIM MODELING */}
          <div className="flex flex-row-reverse items-start gap-6 md:gap-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0">
              <Image
                src="/bim-modeling-DlxwX07w.png"
                alt="BIM MODELING"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex-1">
              <h3 className={`text-xl md:text-3xl font-bold ${mochiy.className} text-[#0E3B34] mb-4`}>
                BIM MODELING
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span>BIM modeling for all buildings & infra disciplines.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                  <span>
                    Presentations to client prior to construction with zero clash and up to LOD 500.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 5️⃣ 3D Rendering */}
          <div className="flex flex-row items-start gap-6 md:gap-16">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0">
              <Image
                src="/3d-rendering-ETiVv9fk.png"
                alt="3D Rendering"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex-1">
              <h3 className={`text-xl md:text-3xl font-bold ${mochiy.className} text-[#0E3B34] mb-4`}>
                3D Rendering
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm md:text-lg leading-relaxed">
                  <span className="mt-2 w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
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
