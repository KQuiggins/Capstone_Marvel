import Link from 'next/link'
import { GiBatMask } from "react-icons/gi";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GiBatMask className="h-6 w-6 text-red-600" />
          <span className="sr-only">Marvel Explorer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-2xl text-bold text-red-600 font-medium hover:underline underline-offset-4 font-marvel_cursive"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-2xl text-bold text-red-600 font-medium hover:underline underline-offset-4 font-marvel_cursive"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-2xl text-bold text-red-600 font-medium hover:underline underline-offset-4 font-marvel_cursive"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-2xl text-bold text-red-600 font-medium hover:underline underline-offset-4 font-marvel_cursive"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
  )
}

export default Header