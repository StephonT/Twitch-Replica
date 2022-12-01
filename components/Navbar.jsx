import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/images/logo.png'

function Navbar() {
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
     {/* Left Side */}
    <div className='flex grow items-center justify-start'></div>
    
    {/* Cannot wrap link around another functional component so in this case, I used an "a" tag */}
    <Link href='/'>
        <a>
            <Image src={Logo} alt="twitch logo" />
        </a>
    </Link>
     
     
     {/* Middle */}
     {/* Right Side */}
    </div>
  )
}

export default Navbar