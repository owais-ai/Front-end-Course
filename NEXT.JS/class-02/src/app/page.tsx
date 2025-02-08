import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div>


      <h1>This is our home page</h1>
      <Link href={"/about"}>Click here to naviagate to About Page</Link>
      <br />
    
    </div>
  )
}