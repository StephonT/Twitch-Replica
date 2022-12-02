import Image from 'next/image'
import React from 'react'
import Headphones from '../public/assets/images/headphones.png'
import Mic from '../public/assets/images/mic.png'
import Paint from '../public/assets/images/paint.png'
import Remote from '../public/assets/images/remote.png'
import Trophy from '../public/assets/images/trophy.png'


const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
        {/* container */}
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
          {/* Grid Item */}
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className="text-2xl font-bold ">Games</p>
            <Image src={Remote} alt='remote logo'  />
          </div>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className="text-2xl font-bold ">IRL</p>
            <Image src={Mic} alt='remote logo'  />
          </div>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className="text-2xl font-bold ">Music</p>
            <Image src={Headphones} alt='remote logo'  />
          </div>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className="text-2xl font-bold ">Esports</p>
            <Image src={Trophy} alt='remote logo'  />
          </div>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className="text-2xl font-bold ">Creative</p>
            <Image src={Paint} alt='remote logo'  />
          </div>
        </div>
    </div>
  )
}

export default IconBar