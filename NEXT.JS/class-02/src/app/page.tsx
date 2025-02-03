import Link from "next/link"
import Header from "./components/Header"

export default function Home(){
  return(
    <div>
      <Header/>
      <h1>This is our home page</h1>
      <Link href={"/about"}>Click here to naviagate to About Page</Link>
      <br />
      <Link href={"https://www.facebook.com/"}>Facebook</Link>
    </div>
  )
}