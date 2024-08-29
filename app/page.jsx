import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main data-theme="corporate">
      <div className="bg-base-100 shadow-lg fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-24 pb-16 px-4 md:px-8">
        <Hero />
      </div>
    </main>
  );
}
