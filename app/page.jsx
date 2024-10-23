import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
        <Hero />
      <Footer />
    </div>
  );
}
