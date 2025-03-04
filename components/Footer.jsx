import Link from 'next/link'
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

/**
 * Footer component for the application.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
      <div className='text-xs text-gray-500 mt-2'>
					Data provided by Marvel. © 2024 MARVEL
				</div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-lg hover:underline underline-offset-4" href="#">
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link className="text-lg hover:underline underline-offset-4" href="#">
          <RiTwitterXLine />
          <span className="sr-only">Twitter</span>
        </Link>
      </nav>
      
    </footer>
  )
}

export default Footer