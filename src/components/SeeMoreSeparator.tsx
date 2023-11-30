import Button from './Button'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Props = {
  onExpand: () => void
  isExpanded: boolean
}

function SeeMoreSeparator({ onExpand, isExpanded }:Props) {
  return (
    <div className="md:before:content-[''] md:before:border-b md:before:absolute md:before:w-full relative flex items-center flex-grow justify-center pt-5">
      <Button 
        className='z-10 whitespace-nowrap text-sm font-medium' 
        variant="separator" 
        size="show-more"
        onClick={onExpand}
      >
        { !isExpanded ? 'See more':'See less' }
        <ChevronDown className={`${ isExpanded && 'rotate-180' } transition-transform text-sm`} strokeWidth={1} />
      </Button>
    </div>
  )
}

export default SeeMoreSeparator