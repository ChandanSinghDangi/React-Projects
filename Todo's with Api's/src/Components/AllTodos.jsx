
import React, { useState } from 'react'
import axios from 'axios';


function AllTodos({todos, setTodoFlag}) {

    const [todoId, setTodoId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const handleSave = async(todoId) => {

        const res = await axios.patch(`https://api.freeapi.app/api/v1/todos/${todoId}`, {
            title: editTitle,
            description: editDescription
        });

        if(res.status === 201 || res.status === 200) {
            setTodoId(null);
        }

        if(setTodoFlag) {
            setTodoFlag(prev => !prev);
        }
    }
    
    const handleDelete = async(todoId) => {

        const deleteResult = await axios.delete(`https://api.freeapi.app/api/v1/todos/${todoId}`);

        if(deleteResult) {
            setTodoFlag(prev => !prev);
        }
    }

    return (

        <div className='rounded-lg p-2 border-gray-400'> 

            {todos?.length === 0 && <p className='text-center text-2xl text-gray-500 border p-1 rounded-2xl'>No todos yet!</p>}

            <ul className='flex flex-col gap-2 p-2'>

                {todos?.map((todo) => (

                    <li key={todo._id} className='border border-gray-300 rounded-2xl flex flex-col items-center gap-2 p-1'>

                        {todoId === todo._id ? (

                            <>
                                <input type="text" 
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className='border rounded-lg p-1 w-100 border-gray-300'
                                
                                />

                                <input type="text" 
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    className='border rounded-lg p-1 w-100 border-gray-400'

                                />

                                <button className='border px-3 p-1 rounded-lg border-gray-300 cursor-pointer' 
                                    onClick={() => handleSave(todo._id)}
                                >Save</button>

                                <button className='border px-3 p-1 rounded-lg border-gray-300 cursor-pointer'
                                    onClick={() => setTodoId(null)}
                                >Cancel</button>
                            </>

                        ) : (

                            <>
                                <div className='border w-1/2 p-1 rounded-lg border-gray-400 bg-purple-100 text-center'>
                                    <h3><span className='font-semibold'>title: </span>{todo.title}</h3>
                                    <h3><span className='font-semibold'>Description: </span>{todo.description}</h3>
                                </div>   

                                <button className='border px-3 p-1 rounded-lg border-gray-300 
                                    cursor-pointer text-gray-500'
                                    onClick={() => {
                                        setTodoId(todo._id);
                                        setEditTitle(todo.title);
                                        setEditDescription(todo.description);
                                    }} 
                                >Edit</button>

                                <button className='border px-3 p-1 rounded-lg border-gray-300 
                                    cursor-pointer text-gray-500'
                                    onClick={() => handleDelete(todo._id)}
                                >Delete</button>
                            </>
                        )}

                    </li>
                    
                ))}

            </ul>
        
        </div>

    )

}


export default AllTodos

