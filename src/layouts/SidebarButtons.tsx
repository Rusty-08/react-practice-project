import React, { Children, ComponentProps, ReactNode, useState } from 'react'
import Button from '../components/Button'
import { LucideIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type Category = {
  children?: ReactNode // header
  component: {
    icon: LucideIcon
    name: string
  }[]
  activePage: string
  setActivePage: (e: string) => void
} & ComponentProps<"div">

function SidebarButtons({ children, component, activePage, className, setActivePage }: Category) {
  return (
    <div className={twMerge('flex flex-col py-3 border-b px-3', className)}>
      { children }
      { component.map(item => (
        <Button  
          key={item.name}
          className={`${activePage !== item.name && 'hover:bg-secondary'} px-3.5 flex gap-5 rounded-lg py-2.5`}
          onClick={()=>setActivePage(item.name)} 
          variant={ activePage == item.name ? 'default':'ghost' }
        >
          <item.icon className={`${activePage == item.name && 'fill-secondary-dark stroke-secondary-hover'} w-5 h-5`} strokeWidth={1}/>
          <span className={`${activePage == item.name && ' font-medium'} text-sm`}>{ item.name }</span>
        </Button>
      ))}
    </div>
  )
}

export default SidebarButtons