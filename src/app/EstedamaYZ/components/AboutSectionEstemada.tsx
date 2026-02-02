import Image from "next/image";
import Link from "next/link";

export default function AboutSectionEstemada() {
  return (
    <section id="about-us" className="bg-[#F4F8F2] py-20 px-6 md:px-16">
      
      {/* ===== Row 1 ===== */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/aboutus-CMuEBipy.jpg"
            alt="About Image"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-black">
            ABOUT US
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Estedama YZ is a subsidiary of YZ GROUP enterprise specialized 
            in the Building Energy & MEP Services conservation solutions 
            to the consumption based on the green building global standards.
          </p>

          <Link
            href="/estedamayz"
            className="inline-block border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* ===== Row 2 ===== */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/whatwedo-kYf4rpeI.jpg"
            alt="What We Do"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-black">
            WHAT WE DO
          </h2>

          <p className="text-gray-700">
            We present to community:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
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
            className="inline-block border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition"
          >
            Read More
          </Link>
        </div>
      </div>

    </section>
  );
}
