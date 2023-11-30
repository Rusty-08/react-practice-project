import { useState } from "react"
import Image from "../components/Image"
import SeeMoreSeparator from "../components/SeeMoreSeparator"
import ShortsHeader from "./ShortsHeader"
import Button from "../components/Button"

type Shorts = {
  shorts: Props[]
}

type Props = {
  image: string
  title: string
  views: string
}

function Shorts({ shorts }:Shorts) {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisibility] = useState(true)

  return (
    <>
    {
      visible ? 
    (
    <div>
      <ShortsHeader display={visible} onClose={() => setVisibility(false)} />
          <div className="grid pb-3 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
          {
            (expanded
            ? shorts.concat(...shorts.toReversed())
            : shorts)
            .map((short, index) => (
              <div key={index} className="flex flex-col gap-0">
                <Image variant="video" src={short.image} />
                <p className="mt-3 mb-1 font-medium">{ short.title }</p>
                <span className="text-secondary-text text-sm">{ short.views }</span>
              </div>
            ))
          }
          </div>
      <SeeMoreSeparator isExpanded={expanded} onExpand={()=>setExpanded(expanded ? false : true)} />
    </div>
    ) : (
      <div className="flex items-center mb-8 gap-5">
        <p className='text-sm text-secondary-text'>Shelf will be hidden for 30 days</p>
        <Button 
          className='w-16 h-9' 
          variant="primary" 
          size="icon"
          onClick={()=>setVisibility(true)}
        >
          Undo
        </Button>
      </div>
      )
    }
  </>
  )
}

export default Shorts