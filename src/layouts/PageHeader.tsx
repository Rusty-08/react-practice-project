import { Menu, Video, PlaySquare, Mic } from 'lucide-react'
import profle from '../assets/luffy.jpg'
import React from 'react'
import Button from '../components/Button'
import Image from '../components/Image'

function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href="/" className='flex items-center gap-2'>
          <PlaySquare className='text-red-500'/>
          <h1 className='text-md font-bold text-neutral-800'>PlayTube</h1>
        </a>
      </div>
      <div className="">
        {/* search bar */}
      </div>
      <div className="flex items-center gap-3 me-2">
        <Button variant='ghost' size='icon'>
          <Video />
        </Button>
        <Button variant='ghost' size='icon'>
          <Mic />
        </Button>
        <a href="/" className='flex items-center'>
          <Image variant="profile" src={profle} />
        </a>
      </div>
    </div>
  )
}

export default PageHeader