import { useEffect, useRef, useState } from "react"
import Button from "../components/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CatoryProps = {
  categories: string[]
  isSidebarOpen: Boolean
}

const SCROLL_AMOUNT = 200

function Category({ categories, isSidebarOpen }: CatoryProps) {

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
    <div className={`${isSidebarOpen && 'me-4'} ps-6 pe-6 bg-white scroll-smooth right-0 md:left-[4.5rem] left-0 flex items-center fixed top-[3.5rem]`}>
      <div ref={containerRef} onScroll={handleScroll} className='scroll-smooth py-3 overflow-x-scroll scrollbar-hide'>
        <div className="flex scroll-smooth gap-3 whitespace-nowrap w-[max-content]">
          {categories.map((category, index) => (
            <Button 
              key={category}
              variant={activeCategory === index ? 'dark':'default'} 
              onClick={()=>setActiveCategory(index)}
              className={`
                ${(scrollPosition > 0 && index == 0) ? 'invisible':'visible'}
                px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap`}
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
      <div className="absolute right-0 w-20 -translate-x-2 flex items-end justify-end bg-gradient-to-l from-white from-50% to-transparent">
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