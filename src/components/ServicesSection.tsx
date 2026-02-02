import Image from "next/image";
  import { Mochiy_Pop_One } from "next/font/google";

  const mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: ["400"],
});
export default function ServicesSection() {

  return (
    <section id="service" className="py-20 bg-[#EFF5E9]">
      <div className="max-w-6xl mx-auto px-24 container">

        <h2 className="text-center text-4xl md:text-5xl font-mochiy text-[#0E3B34] mb-16">
          OUR SERVICES
        </h2>

        <div className="space-y-28 relative">

          {/* MEP DESIGN */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 -translate-y-1/4 left-0 hidden md:block">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/mep-design-CufIJCrC.png"
                  alt="MEP DESIGN"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl -ms-16">
 <h3 className={`text-xl md:text-2xl font-bold ${mochiy.className} text-[#0E3B34] mb-2`}>        
                MEP DESIGN
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2  w-2 h-2 bg-black rounded-full"></span>

                  <span>
                    MEP design work for buildings & infrastructure with the top-notch quality and according to the latest innovative techniques in accordance to the global codes.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* DESIGN REVIEW */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 -translate-y-1/4 right-0 hidden md:block">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/design-review-CYR9KcCT.png"
                  alt="DESIGN REVIEW"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl -ms-16">
 <h3 className={`text-xl md:text-2xl font-bold ${mochiy.className} text-[#0E3B34] mb-2`}>
                DESIGN REVIEW
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 -ms-14 w-2 h-2 bg-black rounded-full"></span>
                  <span>
                    Design review in neat details for verification of MEP systems prior to tender stage.
                  </span>
                </li>
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>
                    Design review prior to the construction stage for the verification to the client requirement against the delivered design packages by the design firms.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* SHOP DRAWING */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 -translate-y-1/4 left-0 hidden md:block">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/shop-drawing-CsPdZ061.png"
                  alt="SHOP DRAWING"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl -ms-72">
             <h3 className={`text-xl md:text-2xl font-bold ${mochiy.className} text-[#0E3B34] mb-2`}>
                SHOP DRAWING
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>Shop drawing 2D CAD enriched with installation details.</span>
                </li>
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 -ms-[110px] w-2 h-2 bg-black rounded-full"></span>
                  <span>Shop drawing 3D Revit with LOD 450.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BIM MODELING */}
          <div className="relative flex justify-center -ms-24">
            <div className="absolute top-1/2 -translate-y-1/4 right-0 hidden md:block">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/bim-modeling-DlxwX07w.png"
                  alt="BIM MODELING"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl -ms-16">
            <h3 className={`text-xl md:text-2xl font-bold ${mochiy.className} text-[#0E3B34] mb-2`}>
                BIM MODELING
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-center gap-1 text-sm -ms-[185px]">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>
                    BIM modeling for all buildings & infra disciplines.
                  </span>
                </li>
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>
                    Presentations to client prior to construction with zero clash and up to LOD 500.
                  </span>
                </li>
              </ul>
            </div>
          </div>
               {/* SHOP DRAWING */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 -translate-y-1/4 left-0 hidden md:block">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/3d-rendering-ETiVv9fk.png"
                  alt="SHOP DRAWING"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl -ms-64">
              <h3 className={`text-xl md:text-2xl font-bold ${mochiy.className} text-[#0E3B34] mb-2`}>
              3D Rendering
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-center gap-1 text-sm">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                  <span>3D rendering work for buildings interior & exterior using 3D Max.
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
