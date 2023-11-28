import { useEffect, useRef, useState } from "react"
import Button from "../components/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CatoryProps = {
  categories: string[]
}

const SCROLL_AMOUNT = 200

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
    <div className="py-2 pb-2.5 bg-white right-5 left-24 flex items-center fixed top-16">
      <div ref={containerRef} onScroll={handleScroll} className='scroll-smooth overflow-x-scroll scrollbar-hide'>
        <div className="flex scroll-smooth gap-3 whitespace-nowrap w-[max-content]">
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
              const newScroll = scrollPosition - SCROLL_AMOUNT;
              return containerRef.current?.scrollTo({
                left: newScroll,
                behavior: "smooth",
              });
            }}
          >
            <ChevronLeft strokeWidth={1}/>
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
              const newScroll = scrollPosition + SCROLL_AMOUNT;
              return containerRef.current?.scrollTo({
                left: newScroll,
                behavior: "smooth",
              });
            }}
          >
            <ChevronRight strokeWidth={1}/>
          </Button>
        }
      </div>
    </div>
  )
}

export default Category