import { ArrowDownToLine, FileDown, FileVideo, FileVideo2, Film, Home } from "lucide-react"
import Button from "../components/Button"
import { useState } from "react"

function SidebarLinks() {
  
  const [activeLink, setActiveLink] = useState(0)

  const linkLists = [
    { name: 'Home', icon: <Home className={`${ activeLink == 0 && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1}/> },
    { name: 'Shorts', icon: <FileVideo2 className={`${ activeLink == 1 && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1}/> },
    { name: 'Subscriptions', icon: <Film className={`${ activeLink == 2 && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1}/> },
    { name: 'You', icon: <FileVideo className={`${ activeLink == 3 && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1}/> },
    { name: 'Downloads', icon: <FileDown className={`${ activeLink == 4 && "fill-secondary-dark stroke-secondary-hover" } w-5`} strokeWidth={1}/> }
  ]
  return (
    <div className="flex flex-col">
      {linkLists.map((link, index) => (
        <Button 
          key={index}
          variant="ghost"
          onClick={()=>setActiveLink(index)}
          className="w-full py-4 rounded-lg gap-1 flex flex-col items-center"
        >
          { link.icon }
          <span className="text-[0.65rem]">{ link.name }</span>
        </Button>
      ))}
    </div>
  )
}

export default SidebarLinks