import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-white"><Link href="/" className="flex items-center ">
          <Image src="/logo2.svg" alt="Logo" width={150} height={50} className="text-white" />
        </Link></div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-sm mt-4 md:mt-0">
            <Link href="/shop" className="hover:text-gray-400">Shop</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/journal" className="hover:text-gray-400">Journal</Link>
            <Link href="/custom" className="hover:text-gray-400">Custom</Link>
          </nav>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          {/* Social Media */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaXTwitter />
            </a>
          </div>

          {/* Policies */}
          <nav className="flex space-x-6 text-sm mt-4 md:mt-0">
            <Link href="/faqs" className="hover:text-gray-400">FAQs</Link>
            <Link href="/returns" className="hover:text-gray-400">Returns</Link>
            <Link href="/ordering" className="hover:text-gray-400">Ordering</Link>
            <Link href="/shipping" className="hover:text-gray-400">Shipping</Link>
            <Link href="/personalization" className="hover:text-gray-400">Personalization Policies</Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs text-gray-500 mt-6">
          Copyright © 2023 BOTOL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
