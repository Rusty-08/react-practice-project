import Button from './Button'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Props = {
  onExpand: () => void
  isExpanded: boolean
}

function SeeMoreSeparator({ onExpand, isExpanded }:Props) {
  return (
    <div className="before:content-[''] before:border-b before:absolute before:w-full relative flex items-center flex-grow justify-center pt-5">
      <Button 
        className='z-10 text-sm font-medium' 
        variant="separator" 
        size="show-more"
        onClick={onExpand}
      >
        Show more
        {
        !isExpanded
        ? <ChevronDown className='text-sm' strokeWidth={1} />
        : <ChevronUp className='text-sm' strokeWidth={1} />
        }
      </Button>
    </div>
  )
}

export default SeeMoreSeparator