import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col sm:flex-row items-center my-6 gap-4 sm:gap-10 min-h-screen justify-center">
      <div className="bg-blue-600 h-80 w-80">first box</div>
      <div className="bg-[#FFF3E3] h-80 w-80">second box</div>
      <div className="bg-[#B88E2F] h-80 w-80">third box</div>
      <div className="bg-green-600 h-80 w-80">Fourth box</div>
      </div>
     

      <div>
    <Hero />
      </div>
    </main>
  );
}
