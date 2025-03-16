import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const cars = [
    { href: "/corolla", src: "/Corolla.jpg", name: "Toyota Corolla", price: "PKR 59.7-65.5 lac" },
    { href: "/alto", src: "/Alto.png", name: "Suzuki Alto", price: "PKR 23-30.5 lac" },
    { href: "/swift", src: "/Swift.jpg", name: "Suzuki Swift", price: "PKR 39.7-45.5 lac" },
    { href: "/civic", src: "/Civic.jpg", name: "Honda Civic", price: "PKR 65.5-70.5 lac" },
  ]
  
  return (
    <div>
      <Navbar />
      <div className="text-center my-9 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center">
          <div className="hidden md:block bg-gray-300 border-t-2 w-40 md:w-60"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-bold">
            Sell Your Car on PakWheels and Get the Best Price
          </p>
          <div className="hidden md:block bg-gray-300 border-b-2 w-40 md:w-60"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 mt-10">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg md:text-xl text-blue-900 mb-4">
              Post your Ad on PakWheels
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> Post your Ad for Free in 3 Easy Steps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> Get Genuine offers from Verified Buyers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> Sell your car Fast at the Best Price
              </li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white w-40 h-10 mt-3 rounded">
              Post Your Ad
            </button>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="h-20 border-l-2 border-gray-300" />
            <span className="px-4 text-gray-700 font-bold">OR</span>
            <div className="h-20 border-l-2 border-gray-300" />
          </div>

          <div className="text-center md:text-left">
            <p className="font-bold text-lg md:text-xl text-blue-900 mb-4">
              Try PakWheels Sell It For Me
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> Dedicated Sales Expert to Sell your Car
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> We Bargain for you and share the Best Offer
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✔</span> We ensure Safe & Secure Transaction
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-40 h-10 mt-3 rounded">
              Register Your Car
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-4 md:px-20">
        <div className="text-gray-600">
          <div className="font-bold text-xl text-center md:text-left">Featured New Cars</div>
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-sm">
            <span className="font-bold border-b-2 border-blue-400">Popular</span>
            <span>Upcoming</span>
            <span>Newly Launched</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 text-blue-800 font-bold">
          {cars.map((car, index) => (
            <Link key={index} href={car.href}>
              <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer">
                <Image src={car.src} alt={car.name} width={220} height={150} className="mx-auto" />
                <p className="text-center mt-2">{car.name}</p>
                <div className="text-green-600 text-xs text-center">{car.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
