import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-[22px]">
      <div className="text-pink-800 bg-yellow-400 text-5xl">
        this is my first div
      </div>
      <div className="text-white bg-slate-600">This is my second div</div>
    </div>
  );
}
