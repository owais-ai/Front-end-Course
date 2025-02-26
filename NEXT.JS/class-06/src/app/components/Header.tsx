import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='bg-blue-950 h-40 text-white hidden sm:block sticky top-0'>
            <div className='first flex justify-between'>
                <div className='flex gap-1 mx-20 py-4'>
                    <Image src={"/phone.webp"} alt='Phone Icon' width={10} height={10} className='h-6 w-6' />
                    <p>Download App via SMS</p>
                </div>
                <div className='mr-20 py-4'>
                    Sign In | Sign Up
                </div>
            </div>


            <div className='line bg-gray-400 h-[1px] mx-20'></div>

            <div className='second ml-20 my-5 flex items-center'>
                <Image src={"/logo.webp"} alt='logo' width={100} height={100} className='w-48'/>
                <nav className='ml-40'>
                    <ul className='flex gap-10 mx-20'>
                        <li>New Cars</li>
                        <li>Used Cars</li>
                        <li>Bikes</li>
                        <li>Auto Store</li>
                        <li>Blogs</li>
                        <li>Forum</li>
                    </ul>
                </nav>
                <div>
                    <button className='ml-20 h-10 w-40 rounded bg-red-600'>Post an Ad</button>
                </div>
            </div>
        </header>
    )
}

export default Header