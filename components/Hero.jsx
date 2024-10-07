import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1
                                    className={`font-marvel_header text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none text-red-600`}
                                >
                                    Explore the Marvel Universe
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl">
                                    Search your favorite Marvel characters, view their profiles,
                                    and explore their comic book appearances.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/gallery">
                                    <Button className="bg-red-600 hover:bg-red-700 text-lg">
                                        Explore the Gallery
                                        <Search className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <Image
                            alt="Marvel Characters"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height={550}
                            src="/images/hero.jpg"
                            width={550}
                            priority={true}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero