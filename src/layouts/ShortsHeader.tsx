import { FileVideo2, X } from 'lucide-react'
import Button from '../components/Button'

type Props = {
  onClose: () => void
  display: boolean
}

function ShortsHeader({ onClose, display }: Props) {
  return (
    display &&
    <div className='flex justify-between items-start mb-5'>
      <div className='flex gap-2 items-center'>
        <FileVideo2 className='fill-red-600 stroke-red-200' strokeWidth={1} />
        <p className='text-xl font-bold'>Shorts</p>
      </div>
      <Button onClick={onClose} variant='ghost' size='icon'>
        <X strokeWidth={1}/>
      </Button>
    </div>
  )
}

export default ShortsHeader