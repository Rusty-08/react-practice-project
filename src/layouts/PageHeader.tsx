import { Menu, Video, PlaySquare, Mic, Upload, Search, Bell, ArrowLeft } from 'lucide-react'
import profle from '../assets/luffy.jpg'
import React, { useState } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import Category from '../components/Category'
import { CategoryLists } from '../data/CategoryLists'

function PageHeader() {

  const [viewFullSearch, setViewFullSearch] = useState(false)

  return (
    // HEADER
    <>
    <div className='flex gap-10 lg:gap-24 justify-between py-2 mx-4'>
      {/* SIDEBAR SIDE */}
      <div className={`${viewFullSearch ? 'hidden' : 'flex'} gap-4 items-center flex-shrink-0`}>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href="/" className='flex items-center gap-2'>
          <PlaySquare className='text-red-500'/>
          <h1 className='text-md font-bold text-neutral-800'>PlayTube</h1>
        </a>
      </div>
      {/* SEARCH BAR */}
      <div className={`${viewFullSearch ? 'flex' : 'md:flex hidden'} flex-grow relative items-center justify-end`}>
        <Button 
          onClick={()=>setViewFullSearch(false)} 
          variant='ghost' 
          size='icon' 
          className={`${viewFullSearch ? 'flex mr-2' : 'hidden'}`}
        >
          <ArrowLeft />
        </Button>
        <input 
          type="text" 
          placeholder='Search'
          className='peer h-10 flex-grow lg:ml-10 pb-0.5 placeholder:text-secondary-text outline-none border border-secondary-hover focus:border-inset focus:border-blue-800 focus:lg:ps-14 focus:ml-0 focus:shadow-inner px-4 rounded-s-full' />
        <Search className='text-secondary-text invisible peer-focus:lg:visible absolute left-5 w-5' />
        <Button variant='ghost' size='icon' className='flex-shrink-0 rounded-none py-1.5 bg-slate-50 border border-secondary-hover border-s-0 rounded-e-full w-16'>
          <Search className='text-secondary-text w-5' />
        </Button>
        <Button 
          variant={viewFullSearch ? 'ghost' : 'default'} 
          size='icon' 
          className={`${viewFullSearch ? 'ml-2' : 'mx-4'} flex-shrink-0`}
        >
          <Mic />
        </Button>
      </div>
      {/* PROFILE SIDE */}
      <div className={`${viewFullSearch ? 'hidden' : 'flex'} items-center md:gap-2 me-4 flex-shrink-0`}>
        <Button onClick={()=>setViewFullSearch(true)} variant='ghost' size='icon' className='md:hidden flex'>
          <Search className='w-5' />
        </Button>
        <Button variant='ghost' size='icon' className='md:hidden flex'>
          <Mic />
        </Button>
        <Button variant='ghost' size='icon'>
          <Video />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell />
        </Button>
        <a href="/" className='flex ml-1 items-center'>
          <Image variant="profile" src={profle} />
        </a>
      </div>
    </div>
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="w-[4.5rem] flex flex-col flex-shrink-0"></div>
      {/* Body */}
      <div className="flex-grow px-6 py-2 overflow-x-hidden">
        <Category categories={CategoryLists} />
      </div>
    </div>
    </>
  )
}

export default PageHeader