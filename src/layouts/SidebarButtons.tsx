import React, { Children, ReactNode, useState } from 'react'
import Button from '../components/Button'
import { LucideIcon } from 'lucide-react'

type Category = {
  component: {
    icon: LucideIcon
    name: string
  }[]
}

function SidebarButtons({ component }: Category) {

  const [activePage, setActivePage] = useState('Home')

  return (
    <div className='flex flex-col my-3 px-3 w-full'>
      {component.map(item => (
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