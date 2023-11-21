interface Props {
  title: string
  body: string
}

interface Obj {
  post: Props
}

function Post({ post }: Obj) {
  return (
    <div className='card p-3 px-4 w-75'>
      <h4>{ post.title }</h4>
      <span>{ post.body }</span>
    </div>
  )
}

export default Post