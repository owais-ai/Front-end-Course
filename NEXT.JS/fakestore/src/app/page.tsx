import Link from "next/link";
import LandingPage from "./view/LandingPage/LandingPage";

export default function Home() {
  return (
    <div>
      <Link href={"/products"}><div className="text-3xl text-green-700 text-center pt-20">Go to Product Page</div> </Link>
    </div>
  );
}
