import React from 'react'

const Header = () => {
    return (
        <div className='bg-blue-950 h-40 text-white'>
            <div className='first flex justify-between'>
                <div className='mx-20 py-4'>
                    Download App via SMS
                </div>
                <div className='mr-20 py-4'>
                    Sign In | Sign Up
                </div>
            </div>

            
            <div className='line bg-gray-400 h-[1px] mx-20'></div>

            <div className='third'></div>
        </div>
    )
}

export default Header