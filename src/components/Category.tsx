import { useState } from "react"
import Button from "./Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CatoryProps = {
  categories: string[]
}

function Category({ categories }: CatoryProps) {

  const [activeCategory, setActiveCategory] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollEnded, setIsScrollEnded] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLDivElement> ) => {
    const container = e.currentTarget

    container.clientWidth + container.scrollLeft >= container.scrollWidth
    ? setIsScrollEnded(true)
    : setIsScrollEnded(false)

    setScrollPosition(container.scrollLeft)
    console.log('clientWidth:' + (container.clientWidth + container.scrollLeft))
    console.log('scrollWidth:' + container.scrollWidth)
  }

  const scrollRange = () => {
    // scroll on click
  }

  return (
    <div className="relative flex items-center">
      <div onScroll={handleScroll} className={`${''} scroll-x flex gap-3 overflow-x-scroll scrollbar-hide`}>
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
      <div className="absolute w-20 -translate-x-4 bg-gradient-to-r from-white from-50% to-transparent">
        {
        scrollPosition > 0 &&
        <Button variant="ghost" size="icon">
          <ChevronLeft />
        </Button>
        }
      </div>
      <div className="absolute right-0 w-20 translate-x-3 flex items-end justify-end bg-gradient-to-l from-white from-50% to-transparent">
        { 
        !isScrollEnded &&
        <Button variant="ghost" size="icon">
          <ChevronRight />
        </Button>
        }
      </div>
    </div>
  )
}

export default Category