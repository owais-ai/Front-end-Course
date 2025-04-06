import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-bold py-20">This is My Home page</h1>
      <Link href={"/books"}>Link to Books page</Link>
    </div>
  );
}
