import Link from 'next/link';
import { GiBatMask } from 'react-icons/gi';

/**
 * Header component for the Marvel Explorer application.
 *
 * This component displays a responsive navigation header with a logo, a title, and navigation links
 * to different sections of the application (Home, Gallery, About, and Contact).
 *
 * @component
 * @returns {JSX.Element} Header component for the application
 */
const Header = () => {
  return (
    <header className="px-4 py-4 lg:px-6 lg:py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link className="flex items-center justify-center mb-4 sm:mb-0" href="/">
          <GiBatMask className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
          <span className="ml-2 text-2xl sm:text-3xl font-bold text-red-600 font-marvel_cursive">Marvel Explorer</span>
        </Link>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
          {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              className="text-xl sm:text-2xl font-bold text-red-600 hover:text-red-700 hover:underline underline-offset-4 font-marvel_cursive transition-colors duration-200"
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
