import { useState, useEffect } from 'react';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import Post from './views/Post';
import Comment from './views/Comment';
import User from './views/User';

function App() {

  const [ resourceType, setResourceType ] = useState('posts')
  const [ items, setItems ] = useState([])
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        const json = await response.json()
        setItems(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [resourceType])

  return (
    <>
      <section className='p-5 vmin-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <div className='btn-group'>
          <Button color={ resourceType == 'posts' ? 'primary' : 'secondary' } onCLick={()=>setResourceType('posts')}>Posts</Button>
          <Button color={ resourceType == 'users' ? 'primary' : 'secondary' } onCLick={()=>setResourceType('users')}>Users</Button>
          <Button color={ resourceType == 'comments' ? 'primary' : 'secondary' } onCLick={()=>setResourceType('comments')}>Comments</Button>
        </div>
        <div className="d-flex w-100 gap-3 justify-content-start align-items-center flex-column">
          {
            isLoading ? (
              <p className='mt-5'>Loading...</p>
            ) : 
              items.map(item => 
                  resourceType == 'posts' && <Post post={item}/>
                  || resourceType == 'comments' && <Comment comment={item}/>
                  || resourceType == 'users' && <User user={item}/>
              )
          }
        </div>
      </section>
    </>
  )
}

export default App
