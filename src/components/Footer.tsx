import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D352E] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="mb-8">
          <Image 
            src="/logo_yz_2-PfnMos6e.png" هنا
            alt="YZ Group Logo" 
            width={180} 
            height={60} 
            className="object-contain"
          />
        </div>

    
        <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-8 text-lg font-medium">
          <a href="#" className="transition-colors">Home</a>
          <a href="#" className="transition-colors">Services</a>
          <a href="#" className="transition-colors">About us</a>
          <a href="#" className="transition-colors">Estedama YZ</a>
          <a href="#" className="transition-colors">Contact Us</a>
        </nav>

     
           <div className="flex mb-4 gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-500 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://wa.me/201123897507"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>

        <hr className="border-white/50 mb-6" />


        <div className="flex flex-col mb-7 md:flex-row justify-between items-center gap-6 text-sm text-gray-300">
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#">Terms & Conditions</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#">Privacy Policy</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#">Accessibility</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#">Legal</a>
          </div>

          <div className="text-center md:text-right">
            Copyright © 2024 Developed by <span className="font-bold  uppercase">  <Link href={"https://www.teqneia.com/?s=yz"}>Teqneia</Link>  </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
