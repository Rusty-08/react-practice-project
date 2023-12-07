import { Menu, Video, PlaySquare, Mic, Upload, Search, Bell, ArrowLeft, X } from 'lucide-react'
import profle from '../assets/luffy.jpg'
import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'

type Props = {
  showSidebar: () => void
  isSidebarOpen: Boolean
}

function PageHeader({ showSidebar, isSidebarOpen }:Props) {

  const [viewFullSearch, setViewFullSearch] = useState(false)
  const [searchContent, setSearchContent] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(event.target.value);
  }

  const eraseInputValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSearchContent('')
    inputRef.current?.focus()
  }

  return (
    // HEADER
    <>
      <div className={
          `flex z-50 bg-white h-header w-full fixed top-0 gap-10 lg:gap-24 justify-between py-2 px-4 
          ${isSidebarOpen && 'pe-8'}`
        }>
        <div className={`${viewFullSearch ? 'hidden' : 'flex'} md:gap-3 gap-2 h-full items-center flex-shrink-0`}>
          <Button onClick={showSidebar} variant='ghost' size='icon'>
            <Menu strokeWidth={1} />
          </Button>
          <a href="/" className='flex items-center gap-2'>
            <PlaySquare className='text-red-100 w-7 h-7 fill-[#FF0000]'/>
            <h1 className='text-lg font-bold text-neutral-800'>TubeTube</h1>
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
            <ArrowLeft strokeWidth={1} />
          </Button>
          <form action="" className='flex flex-grow items-center'>
            <div className="relative flex flex-grow items-center">
              <input 
                ref={inputRef}
                onChange={handleInputChange}
                type="text" 
                placeholder='Search'
                value={searchContent}
                className='peer text-base flex-grow py-4 h-10 lg:ml-8 placeholder:text-neutral-500 outline-none border border-secondary-border focus:border-inset focus:border-blue-800 focus:lg:ps-[3.25rem] focus:ml-0 focus:shadow-inner px-5 pe-10 rounded-s-full'/>
              {
                searchContent !== '' &&
                <Button type='button' onClick={(e)=>eraseInputValue(e)} className='absolute w-9 h-9 right-[2px]' variant="ghost" size="icon">
                  <X strokeWidth={1} />
                </Button>
              }
              <Search strokeWidth={1} className='invisible peer-focus:lg:visible absolute z-10 left-5 w-5' />
            </div>
            <Button onSubmit={(e)=>e.preventDefault} variant='ghost' size='icon' className='flex-shrink-0 rounded-none py-1.5 bg-neutral-100 border border-secondary-border border-s-0 rounded-e-full w-16'>
              <Search className='w-5' strokeWidth={1}/>
            </Button>
          </form>
          <Button 
            variant={viewFullSearch ? 'ghost' : 'default'} 
            size='icon' 
            className='hidden md:flex ml-3 flex-shrink-0'
          >
            <Mic strokeWidth={1}/>
          </Button>
        </div>
        {/* PROFILE SIDE */}
        <div className={`${viewFullSearch ? 'hidden' : 'flex'} items-center gap-1 md:gap-2 md:me-4 flex-shrink-0`}>
          <Button onClick={()=>setViewFullSearch(true)} variant='ghost' size='icon' className='md:hidden flex'>
            <Search className='w-5' strokeWidth={1}/>
          </Button>
          <Button className='hidden md:flex' variant='ghost' size='icon'>
            <Video strokeWidth={1}/>
          </Button>
          <Button variant='notification' size='icon'>
            <Bell strokeWidth={1}/>
          </Button>
          <a href="/" className='flex ml-1 items-center'>
            <Image variant="profile" src={profle} />
          </a>
        </div>
      </div>
    </>
  )
}

export default PageHeader