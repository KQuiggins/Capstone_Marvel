import { Button } from "@/components/ui/button"
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GiBatMask } from "react-icons/gi";
import { ShieldCheck, Search, Info, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"




export default async function Home() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GiBatMask className="h-6 w-6 text-red-600" />
          <span className="sr-only">Marvel Explorer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className={`font-marvel_header text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none text-red-600`}>
                    Explore the Marvel Universe
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Search your favorite Marvel characters, view their profiles, and explore their comic book appearances.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Explore the Gallery
                    <Search className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Image
                alt="Marvel Characters"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/images/hero.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-500">© 2024 Marvel Character Explorer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <RiTwitterXLine />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
