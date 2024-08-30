import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import QuantumAcademy from "./components/QuantumAcademy";
import { Promises } from "./components/Promises";

export default function Home() {
  return (
    <main data-theme="corporate">
      <div className="bg-base-100 shadow-lg fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20 pb-16 max-sm:pb-24 px-4 md:px-8 bg-gradient-to-r from-pink-100 via-white to-blue-100 text-gray-800 shadow-lg shadow-pink-200/50 rounded-lg">
        <Hero />
        <Promises />
      </div>
        <QuantumAcademy/>
    </main>
  );
}
