interface Props {
  name: string
  email: string
  body: string
}

interface Obj {
  comment: Props
}

function Comment({ comment }: Obj) {
  return (
    <div className='card p-3 px-4 w-75'>
      <h4>{ comment.name }</h4>
      <p>{ comment.email }</p>
      <span>{ comment.body }</span>
    </div>
  )
}

export default Comment