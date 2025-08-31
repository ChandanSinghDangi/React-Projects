
import axios from 'axios';
import React, { useState } from 'react'


function AddTodo({setTodoFlag}) {

    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');


    const handleAddTodo = async () => {

        try {

            const res = await axios.post('https://api.freeapi.app/api/v1/todos/', {
                title: todoTitle,
                description: todoDescription
            });
    
            if(res.status === 201 || res.status === 200) {
                setTodoTitle('');
                setTodoDescription('');
            }
            
            if(setTodoFlag) {
                setTodoFlag(prev => !prev);
            }
            
        } catch (error) {
            console.log('Error While Creating new Todo :: ',error);
            
        }
    }

  return (

    <div className=' p-2 flex flex-col items-center gap-2'>

        <input type="text" 
            placeholder='add todo title'
            className='border rounded-lg p-1 w-100 border-gray-300'
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}

        />

        <input type="text" 
            placeholder='add todo description'
            className='border rounded-lg p-1 w-100 border-gray-300'
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}

        />
        <button className='border px-2 p-1 w-20 rounded-lg border-gray-300 cursor-pointer text-gray-500' onClick={handleAddTodo}>Add</button>
      
    </div>

  )

}

export default AddTodo


