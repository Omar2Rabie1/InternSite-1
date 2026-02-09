import Image from "next/image";
import Link from "next/link";

export default function AboutSectionEstemada() {
  return (
    <section className="bg-[#F4F8F2] py-16 px-4 md:px-16">

      {/* ===== Row 1 ===== */}
      <div className="flex flex-row items-center gap-6 md:gap-16 mb-20">

        {/* Image */}
        <div className="w-1/2">
          <Image
            src="/aboutus-CMuEBipy.jpg"
            alt="About Image"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* Text */}
        <div className="w-1/2 space-y-4">

          <h2 className="text-xl md:text-4xl font-bold text-black">
            ABOUT US
          </h2>

          <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-gray-800">
            Estedama YZ is a subsidiary of YZ GROUP enterprise specialized 
            in the Building Energy & MEP Services conservation solutions 
            to the consumption based on the green building global standards.
          </p>

          <Link
            href="/estedamayz"
            className="inline-block border-2 border-green-800 text-green-800 
                       px-5 py-1 md:px-8 md:py-3 rounded-xl 
                       text-xs sm:text-sm md:text-lg
                       hover:bg-green-800 hover:text-white transition"
          >
            Read More
          </Link>

        </div>
      </div>

      {/* ===== Row 2 ===== */}
      <div className="flex flex-row-reverse items-center gap-6 md:gap-16">

        {/* Image */}
        <div className="w-1/2">
          <Image
            src="/whatwedo-kYf4rpeI.jpg"
            alt="What We Do"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* Text */}
        <div className="w-1/2 space-y-4">

          <h2 className="text-xl md:text-4xl font-bold text-black">
            WHAT WE DO
          </h2>

          <p className="text-xs sm:text-sm md:text-lg text-gray-800">
            We present to community:
          </p>

          <ul className="list-disc list-inside text-gray-800 space-y-2 text-xs sm:text-sm md:text-lg leading-relaxed">
            <li>
              Green & sustainable inclusive design & construction services 
              to community buildings.
            </li>
            <li>
              Project consultations for LEED & Green approach.
            </li>
          </ul>

          <Link
            href="/services"
            className="inline-block border-2 border-green-800 text-green-800 
                       px-5 py-1 md:px-8 md:py-3 rounded-xl 
                       text-xs sm:text-sm md:text-lg
                       hover:bg-green-800 hover:text-white transition"
          >
            Read More
          </Link>

        </div>
      </div>

    </section>
  );
}
