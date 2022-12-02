import React from 'react'
import { rec_channels } from '../data/mock-data'
import { RiMovieLine } from 'react-icons/ri'
import Image from 'next/image'

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]'>
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm'>Recommended Channels</p>
            <p><RiMovieLine size={20} className="xl:hidden justify-center w-full" /></p>
        </div>
        {rec_channels.map((item, index) => (
            <div key={index} className="inline-flex intems-center w-full py-[2px]">
                <div>
                    <Image src={item.avatar} width='50' height='50' alt={item.username} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default SideMenu