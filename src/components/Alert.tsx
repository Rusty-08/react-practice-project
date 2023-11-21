import { ReactNode } from "react"

interface Props {
  children: ReactNode
  type: string
}

function Alert({ children, type }: Props) {
  return (
    <div 
        className={ 
          `alert alert-${type} alert-dismissible fade show` 
        }
        role="alert"
      >
        { children }
    </div>
  )
}

export default Alert