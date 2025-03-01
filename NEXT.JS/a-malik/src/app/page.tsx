import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex mx-24 justify-center gap-10">
        <div className="flex flex-col items-center border border-gray-300 rounded-lg mt-10 p-4 w-80 hover:scale-105 transition">
          <Image
            src={"/corolla.webp"}
            alt="corolla"
            width={100}
            height={100}
            className="w-64"
          />
          <p className="text-blue-800 text-xl font-bold">Toyota Corolla</p>
          <p className="text-green-700 font-bold">PKR 59.7-65.5 lac</p>
        </div>

        <div className="flex flex-col items-center border border-gray-300 rounded-lg mt-10 p-4 w-80 hover:scale-105 transition">
          <Image
            src={"/corolla.webp"}
            alt="corolla"
            width={100}
            height={100}
            className="w-64"
          />
          <p className="text-blue-800 text-xl font-bold">Toyota Corolla</p>
          <p className="text-green-700 font-bold">PKR 59.7-65.5 lac</p>
        </div>

        <div className="flex flex-col items-center border border-gray-300 rounded-lg mt-10 p-4 w-80 hover:scale-105 transition">
          <Image
            src={"/corolla.webp"}
            alt="corolla"
            width={100}
            height={100}
            className="w-64"
          />
          <p className="text-blue-800 text-xl font-bold">Toyota Corolla</p>
          <p className="text-green-700 font-bold">PKR 59.7-65.5 lac</p>
        </div>
      </main>
    </div>
  );
}
