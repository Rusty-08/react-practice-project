interface Props {
  name: string
  email: string
  phone: string
}

interface Obj {
  user: Props
}

function User({ user }: Obj) {
  return (
    <div className='card p-3 px-4 w-25'>
      <h4>{ user.name }</h4>
      <p>{ user.email }</p>
      <span>{ user.phone }</span>
    </div>
  )
}

export default User