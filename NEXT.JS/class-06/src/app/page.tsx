import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-center my-6 gap-4 sm:gap-10 min-h-screen justify-center">
      <div className="bg-blue-600 h-80 w-80">first box</div>
      <div className="bg-red-600 h-80 w-80">second box</div>
      <div className="bg-yellow-600 h-80 w-80">third box</div>
      <div className="bg-green-600 h-80 w-80">Fourth box</div>
    </main>
  );
}
