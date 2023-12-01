import React from 'react'
import Button from '../components/Button'
import { Menu, PlaySquare } from 'lucide-react'

type Props = {
  onDisplay: boolean
  setDisplay: () => void
}

function ExpandSidebar({ onDisplay, setDisplay }: Props) {
  return (
    onDisplay &&
    <div className='w-full z-50 h-screen overflow-hidden fixed bg-black bg-opacity-50'>
      <div className={`${onDisplay ? ' translate-x-0':'translate-x-[-15rem]'} transition-transform w-[15rem] flex items-start bg-white h-full`}>
        <div className='md:gap-3 h-header px-4 gap-2 flex items-center justify-center'>
          <Button onClick={setDisplay} variant='ghost' size='icon'>
            <Menu strokeWidth={1} />
          </Button>
          <a href="/" className='flex items-center gap-2'>
            <PlaySquare className='text-red-200 w-7 h-7 fill-red-500'/>
            <h1 className='text-lg font-bold text-neutral-800'>TubeTube</h1>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExpandSidebar