import Image from "next/image";

type Service = {
  title: string;
  description: string[];
  image: string;
  reverse?: boolean;
};

const services: Service[] = [
  {
    title: "MEP DESIGN",
    image: "/mep-design-CufIJCrC.png",
    description: [
      "MEP design work for buildings & infrastructure with the top-notch quality and according to the latest innovative techniques in accordance to the global codes.",
    ],
  },
  {
    title: "DESIGN REVIEW",
    image: "/design-review-CYR9KcCT.png",
    description: [
      "Design review in neat details for verification of MEP systems prior to tender stage.",
      "Design review prior to the construction stage for the verification to the client requirement against the delivered design packages by the design firms.",
    ],
    reverse: true,
  },
  {
    title: "SHOP DRAWING",
    image: "/shop-drawing-CsPdZ061.png",
    description: [
      "Shop drawing 2D CAD enriched with installation details.",
      "Shop drawing 3D Revit with LOD 450.",
    ],
  },
  {
    title: "BIM MODELING",
    image: "/bim-modeling-DlxwX07w.png",
    description: [
      "BIM modeling for all buildings & infra disciplines (Structure, Architecture & MEP) for the coordination purpose and services.",
      "Presentations to client prior to the construction stage to deliver an engineering work with zero clash and up to LOD 500.",
    ],
     reverse: true,
  },
  {
    title: "3D Rendering",

    image: "/3d-rendering-ETiVv9fk.png",
    description: [
      "Shop drawing 2D CAD enriched with installation details.",
      "Shop drawing 3D Revit with LOD 450.",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="service" className="py-20 bg-[#F4F8F0] ">
      <div className="max-w-6xl mx-auto px-24 container ">

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-mochiy text-[#003B2F] mb-16">
          OUR SERVICES
        </h2>

        {/* Services */}
       <div className="space-y-28 relative">
  {services.map((service, index) => (
    <div key={index} className="relative flex justify-center">

      {/* Image */}
      <div
        className={`absolute top-1/2 -translate-y-1/4 ${
          service.reverse ? "right-0" : "left-0"
        } hidden md:block`}
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="max-w-xl -ms-20">
        <h3 className="text-xl md:text-2xl font-bold text-[#003B2F] mb-2">
          {service.title}
        </h3>

        <ul className="space-y-3    ">
          {service.description.map((point, i) => (
            <li key={i} className="flex justify-center gap-1 text-sm">
              <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  ))}
</div>


      </div>
    </section>
  );
}
