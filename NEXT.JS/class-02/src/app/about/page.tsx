import Link from "next/link"
import Header from "../components/Header"

const About = () => {
  return (
    <div>
        <Header/>
        <p>This is About page</p>
            <Link href={"/"}>Home</Link>
    </div>
    
  )
}

export default About

