import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center uppercase py-6">
        Enter Your Details
      </h1>

      {/* Form Section */}
      <form className="flex flex-col justify-center items-center gap-4 w-full px-4">
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-blue-300 p-3 w-full rounded"
          />
        </div>
        <div className="w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-blue-300 p-3 w-full rounded"
          />
        </div>
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Card Number"
            className="border border-blue-300 p-3 w-full rounded"
          />
        </div>
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Address"
            className="border border-blue-300 p-3 w-full rounded"
          />
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-center py-10">
        <Link href="/confirmation">
          <button className="bg-blue-800 text-white p-3 rounded w-40 hover:bg-blue-900 transition">
            Place Your Order
          </button>
        </Link>
      </div>
    </div>
  );
}
