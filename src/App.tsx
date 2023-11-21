import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {

  let [ showAlert, setAlertVisibility ] = useState(false)
  let timeout = 0

  useEffect(() => {
    if (showAlert) {
      timeout = setTimeout(() => {
        setAlertVisibility(false)
      }, 5000)
    }

    return () => clearTimeout(timeout)
  }, [showAlert])

  return (
    <div>
      {showAlert && <Alert type='danger'>Danger Alert</Alert>}
      <Button color='primary' onCLick={()=>setAlertVisibility(true)}>Toggle Alert</Button>
    </div>
  )
}

export default App
