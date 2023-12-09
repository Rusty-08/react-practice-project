import { ArrowDownToLine, FileDown, FileVideo, FileVideo2, Film, Home } from "lucide-react"
import Button from "../components/Button"
import { useState } from "react"

type Props = {
  activePage: string
  setActivePage: (e: string) => void
}

function SidebarLinks({ activePage, setActivePage }: Props) {
  
  const linkLists = [
    { name: 'Home', icon: Home },
    { name: 'Shorts', icon: FileVideo2 },
    { name: 'Subscriptions', icon: Film },
    { name: 'You', icon: FileVideo },
    { name: 'Downloads', icon: FileDown }
  ]

  return (
    <div className="flex flex-col">
      {linkLists.map((link, index) => (
        <Button 
          key={index}
          variant="ghost"
          onClick={()=>setActivePage(link.name)}
          className="w-full py-4 rounded-lg gap-1 flex flex-col items-center"
        >
          <link.icon className={`${ activePage == link.name && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1} />
          <span className="text-[0.65rem]">{ link.name }</span>
        </Button>
      ))}
    </div>
  )
}

export default SidebarLinks