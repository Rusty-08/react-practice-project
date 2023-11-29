import { useState } from "react"
import Image from "../components/Image"
import SeeMoreSeparator from "../components/SeeMoreSeparator"

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

  return (
    <div>
      <div className="grid pb-3 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
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
  )
}

export default Shorts