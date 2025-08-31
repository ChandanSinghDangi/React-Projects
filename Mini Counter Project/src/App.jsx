
import { useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0);


  const handleIncrement = () => {

    setCount(prev => prev + 1);
  }

  const handleDecrement = () => {

    setCount(prev => (prev > 0 ? prev - 1 : 0)); // dosen't let count go below zero....

  }

  return (

    <>

      <h2 className='text-center text-2xl'>Counter</h2>

      <div className='flex justify-center gap-4 p-2'>

        <button className='text-4xl border px-5 rounded-lg' onClick={handleIncrement}>+</button>
        <button className='text-4xl border px-5 rounded-lg' onClick={handleDecrement}>-</button>
        
      </div>

      <div className='mt-3 p-2'>
      
        <p className='text-4xl text-center border w-20 rounded-lg m-auto'>{count}</p>

      </div>

    </>

  )
}

export default App


