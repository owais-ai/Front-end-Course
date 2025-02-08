import React from 'react'
import Link from 'next/link'

const Story = () => {
  return (
    <div>This is Story Page
        <br />
        <Link href={"/about/story/mystory"}>Click here to visit my story</Link>
        <br />
        <Link href={"/"}>Home</Link><br />
        <Link href={"./"}>Return to About page</Link>
        
    </div>
  )
}

export default Story