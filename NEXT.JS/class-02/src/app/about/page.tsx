import Link from "next/link"
import Header from "../components/Header"

const About = () => {
  return (
    <div>
        <Header/>
        <p>This is About page</p>
            <Link href={"/"}>Home</Link>
            <br />
            <Link href={"/about/story"}>CLick here to visit story page</Link>
    </div>
    
  )
}

export default About

