import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      
<div>
  <Image src={"/car.jpeg"} alt="Car Image" width={150} height={150} className="h-60 w-64 m-20"/>
</div>

    </main>
  );
}
