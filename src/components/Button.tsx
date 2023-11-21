interface Props {
  children: string
  color: string
  onCLick: () => void
}

function Button({ children, color, onCLick }: Props) {
  return (
    <button 
      type="button"
      className={ `btn btn-${color}` }
      onClick={ onCLick }
    >
      { children }
    </button>
  )
}

export default Button