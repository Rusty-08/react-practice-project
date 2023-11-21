import { MouseEvent, useState } from 'react'

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  
  const [selectedList, selectList] = useState(0)

  return (
    <>
      <h1>{ heading }</h1>
      <ul className="list-group">
        {
          items.map((item, index) =>
            <li 
              className={
                selectedList === index
                ? "list-group-item active"
                : "list-group-item"
              }
              key={item}
              onClick={() => {
                selectList(index)
                onSelectItem(item)
              }}
            >
              { item }
            </li>
          )
        }
      </ul>
    </>
  )
}

export default ListGroup