import React from 'react'
import CategoriesItems from './CategoriesItems'

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories</span> we think you will
        like
      </h2>
      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg' title='Call of Duty:W...' viewers='90.1k viewers' tag1='FPS' tag2='Shooter' />
      
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg' title='Just Chatting' viewers='377k viewers' tag1='IRL' tag2='' />
      
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg' title='Call of Duty:M...' viewers='178k viewers' tag1='Shooter' tag2='Action' />
      
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg' title='Grand Theft Au...' viewers='200k viewers' tag1='Adventure Game' tag2='' />
      
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg' title='World of Warcr...' viewers='92.2k viewers' tag1='RPG' tag2='' />
        
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg' title='Apex Legends' viewers='76.6k viewers' tag1='FPS' tag2='Shooter' />
        
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-188x250.jpg' title='Fortnite' viewers='48.5k viewers' tag1='RPG' tag2='' />
       
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg' title='World of Warcr...' viewers='92.2k viewers' tag1='Shooter' tag2='' />
        
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/509663-188x250.jpg' title='Special Events' viewers='4k viewers' tag1='IRL' tag2='' />
        
        <CategoriesItems img='https://static-cdn.jtvnw.net/ttv-boxart/838226069_IGDB-188x250.jpg' title='The Callisto Prot...' viewers='142k viewers' tag1='Horror' tag2='Survival' />
      </div>
    </div>
  )
}

export default Categories