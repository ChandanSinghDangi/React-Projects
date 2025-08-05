
import React, { useEffect, useState } from 'react';
import commentConfig from '../appwrite/commentConfig';
import { useSelector } from 'react-redux';
import Input from './Input';
import { useRef } from 'react';



function CommentSection({Slug}) {

    const [comment, setComment] = useState('');
    const [renderComment, setRenderComment] = useState();
    const [reload, setReload] = useState(false);
    const userData = useSelector(state => state.auth.userData);
    const userId = userData.$id;
    const username = userData.name;
    // console.log('this is userData from commentSection :: ',userId);
    // console.log('this is userData from commentSection :: ',username);
    // console.log('this is renderComment from commentSection :: ',renderComment);
    
    const inputRef = useRef();


    const handleComment = async() => {

        // console.log('this is comment from commentSection component :: ',comment);
        
        const addComment = await commentConfig.addComment({commentText:comment, userId, Slug, username}); 

        if(addComment) {
            // console.log('this is addComment :: ',addComment);
            setComment('');
            setReload(prev => !prev);
        }
    }
    // console.log('this is slug id in commentsection :: ',Slug);
    
    useEffect(() => {

        const showComment = async() => {
                
            const allComments = await commentConfig.getComment(Slug);
            
            if(allComments) {
                // console.log('this is allComments for this posts :: ',allComments.documents);
                setRenderComment(allComments.documents);
                // allComments = null; // why this says allComments is constant?
            }              
        }
        showComment();

    }, [reload, Slug])

    return (

        <div className=''>

            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
                <p className='p-1 font-semibold'>{userData.name}</p>
            </div>

            <div className='flex items-center gap-5'>
                <Input 
                    className='bg-black/5 backdrop-blur-md w-2/4 pl-2 text-xl 
                    placeholder:text-gray-400 rounded-md p-3 outline-none 
                    mt-2 mb-3 caret-black hover:shadow-lg focus:outline-none 
                    hover:outline-none border-gray-300 '
                    ref={inputRef}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='add comment'
                />
                <button className='border px-3 py-1 rounded-md border-gray-300 text-gray-500
                    cursor-pointer hover:scale-105 hover:shadow-md transition 
                    duration-101 ' onClick={handleComment}>Submit</button>
            </div>

            {renderComment &&

                <div className='border-zinc-200 border bg-zinc-100 rounded-md 
                    flex flex-col gap-4 mt-3 p-5'>
                {renderComment.map((singleComment) => (
                    <div key={singleComment.$id}>

                        <section className="w-full max-w-2xl mx-auto p-3 bg-white 
                            rounded-xl shadow-md space-y-4 border border-gray-200 
                            transition hover:scale-105 duration-250">

                            <div className="flex items-start gap-3">
                                <img
                                    src={`https://i.pravatar.cc/40?u=${singleComment.userId || singleComment.username || singleComment.$id}`}
                                    alt="User Avatar"
                                    className="w-9 h-9 border-2 border-gray-400 rounded-full"
                                />

                                <div>

                                    <p className="font-semibold 
                                    text-sm">{singleComment.username}</p> 

                                    <p className="text-gray-800 text-base">
                                        {singleComment.commentText}
                                    </p>

                                </div>
                            </div>

                        </section>
                    </div>
                ))}
            </div>

            }
        </div>
    )
}

export default CommentSection
























