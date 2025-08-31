
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import AddTodo from './Components/AddTodo';
import AllTodos from './Components/AllTodos';


function App() {

  const [todos, setTodos] = useState([]);
  const [todoFlag, setTodoFlag] = useState(false);

  useEffect(() => {

    ;(async () => {
      
      try {

        const res = await axios.get('https://api.freeapi.app/api/v1/todos');
        const todoData = res.data.data;
        // console.log('this is data ::', todoData);
        setTodos(todoData);
        
      } catch (error) {

        console.log('Error While Fecthing all todos :: ',error);
      
      }
    
    })()

  }, [todoFlag])


  return (

    <>
      <div className='border-2 rounded-2xl mt-4 max-w-250 m-auto p-2 flex flex-col gap-4 border-gray-400'>

        <h2 className='text-3xl text-center text-gray-700'>Todo List</h2>

        <AddTodo setTodoFlag={setTodoFlag} />
        <AllTodos todos={todos} setTodoFlag={setTodoFlag} />

      </div>

    </>

  )
}

export default App


