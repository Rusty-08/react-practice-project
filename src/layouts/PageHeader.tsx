import { Menu, Video, PlaySquare, Mic, Upload, Search, Bell } from 'lucide-react'
import profle from '../assets/luffy.jpg'
import React from 'react'
import Button from '../components/Button'
import Image from '../components/Image'

function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-24 justify-between pt-2 mb-6 mx-4'>
      {/* SIDEBAR SIDE */}
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href="/" className='flex items-center gap-2'>
          <PlaySquare className='text-red-500'/>
          <h1 className='text-md font-bold text-neutral-800'>PlayTube</h1>
        </a>
      </div>
      {/* SEARCH BAR */}
      <div className="flex flex-grow relative items-center justify-end">
        <input 
          type="text" 
          placeholder='Search'
          className='peer h-10 flex-grow ml-10 pb-0.5 placeholder:text-secondary-text outline-none border border-secondary-hover focus:border-inset focus:border-blue-800 focus:ps-14 focus:ml-0 focus:shadow-inner px-4 rounded-s-full' />
        <Search className='text-secondary-text invisible peer-focus:visible absolute left-5 w-5' />
        <Button variant='ghost' size='icon' className='rounded-none py-1.5 bg-slate-50 border border-secondary-hover border-s-0 rounded-e-full w-16'>
          <Search className='text-secondary-text w-5' />
        </Button>
        <Button size='icon' className='mx-4'>
          <Mic />
        </Button>
      </div>
      {/* PROFILE SIDE */}
      <div className="flex items-center gap-3 me-4">
        <Button variant='ghost' size='icon'>
          <Video />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell />
        </Button>
        <a href="/" className='flex items-center'>
          <Image variant="profile" src={profle} />
        </a>
      </div>
    </div>
  )
}

export default PageHeader