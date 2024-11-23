import Image from 'next/image';
import logo from '../components/logo.png';  // Ensure the import is correct

export default function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image src={logo} alt="Logo" height={40} width={160} /> {/* Use next/image */}
        </a>
        <ul className="flex space-x-4">
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
