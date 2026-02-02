import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#16261D] text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Left Side */}
          <div className="flex flex-col gap-6">

            {/* Logo */}
            <Image
              src="/logo_footer-Bgdss3cq.jpg"
              alt="Estedama YZ Logo"
              width={170}
              height={60}
              className="object-contain"
            />

            {/* Main Links */}
            <nav className="flex gap-10 text-lg font-medium">
              <Link href="#" className="hover:text-gray-300 transition">
                About
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                Services
              </Link>
              <Link href="#" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-sm flex items-center justify-center hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://wa.me/201123897507"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>

      
        <div className="border-t border-white my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-6">

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#">
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="#">
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="#">
              Accessibility
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="#">
              Legal
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            Copyright © 2024 Developed by <span className="font-bold  uppercase">  <Link href={"https://www.teqneia.com/?s=yz"}>Teqneia</Link>  </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
