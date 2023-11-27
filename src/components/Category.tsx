import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CatoryProps = {
  categories: string[]
}

const TRANSLATE_AMOUNT = 200

function Category({ categories }: CatoryProps) {

  const [activeCategory, setActiveCategory] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollEnded, setIsScrollEnded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement> ) => {
    const container = e.currentTarget

    container.clientWidth + container.scrollLeft >= container.scrollWidth
    ? setIsScrollEnded(true)
    : setIsScrollEnded(false)

    setScrollPosition(container.scrollLeft)
  }

  return (
    <div className="relative flex items-center">
      <div ref={containerRef} onScroll={handleScroll} className='scroll-x overflow-x-scroll scrollbar-hide'>
        <div 
          
          className="flex gap-3 whitespace-nowrap transition-transform w-[max-content]"
        >
          {categories.map((category, index) => (
            <Button 
              key={category}
              variant={activeCategory === index ? 'dark':'default'} 
              onClick={()=>setActiveCategory(index)}
              className={`
                ${(scrollPosition > 0 && index == 0) ? 'invisible':'visible'}
                px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute w-20 -translate-x-4 bg-gradient-to-r from-white from-50% to-transparent">
        {
        scrollPosition > 0 &&
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            const newScroll = scrollPosition - TRANSLATE_AMOUNT
            return containerRef.current?.scrollTo(
              newScroll, 0
            )
          }}
        >
          <ChevronLeft />
        </Button>
        }
      </div>
      <div className="absolute right-0 w-20 translate-x-3 flex items-end justify-end bg-gradient-to-l from-white from-50% to-transparent">
        { 
        !isScrollEnded &&
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            const newScroll = scrollPosition + TRANSLATE_AMOUNT
            return containerRef.current?.scrollTo(
              newScroll, 0
            )
          }}
        >
          <ChevronRight />
        </Button>
        }
      </div>
    </div>
  )
}

export default Category