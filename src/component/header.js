import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        </Link>

        {/* Navigation Links */}
       <div className="flex items-center gap-10">
       <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition">Shop</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact us</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">About</Link>
          <Link href="/journal" className="text-gray-700 hover:text-gray-900 transition">Journal</Link>
          <Link href="/custom" className="text-gray-700 hover:text-gray-900 transition">Custom</Link>
        </nav>

        {/* CTA Button */}
        <Link href="/inquiry">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
            Inquiry Now
          </button>
        </Link>
       </div>
      </div>
    </header>
  );
};

export default Header;
