import React from 'react'
import Hero from './Hero'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <LiveChannels />
        <IconBar />
    </div>
  )
}

export default Main