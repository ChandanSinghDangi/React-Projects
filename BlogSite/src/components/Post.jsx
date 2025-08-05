
import React, { useEffect, useState } from 'react'
import appwriteServices from '../appwrite/config'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux';
import EditPost from './EditPost';
import { useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';


function Post() {

    const { slug } = useParams();
    const [post, setPost] = useState('');
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);
    // console.log('this is userData from Post :: ',userData.$id);
    // console.log('this is userId of Post page :: ',post.userId);
    
    // console.log('this is userId of current user :: ',currentUserId);
    // console.log('this is a slug from Post page :: ',slug);
    
    
    const isAuth = post && userData ? post.userId === userData.$id : false;
    // console.log('this is isAuth status in Post page :: ',isAuth);
    

    const handleLike = () => {

        const newLiked = !liked;
        setLiked(newLiked);
        setCount(prev => newLiked ? prev + 1 : prev - 1);
    };

    useEffect(() => {

        const handlePost = async() => {

            const singlePost = await appwriteServices.getPost(slug);

            if(singlePost) {
                setPost(singlePost);
                // console.log('this is post from post page :: ',singlePost);
                
            } else {
                navigate('/dashboard');
            }
        }
        handlePost();
        
    }, [])

    const handleDeletePost = async() => {

        const deletePost = await appwriteServices.deletePost(slug);
        console.log('delete Post');
        
        if(deletePost) {
            navigate('/dashboard')
        }
    }

    return (

        <div className='border rounded-3xl pb-5 p-2 border-gray-200 
        mt-5 max-w-320 m-auto'>

            {post && 
            <div className=''>

                <div className=' border-zinc-800 rounded-lg p-1'> 
                    <img src={appwriteServices.fileView(post.featuredImage)} alt="img" 
                        className='rounded-3xl'
                    />
                </div>

                <div className='text-center text-xl lg:text-4xl 
                    font-semibold lg:flex lg:flex-col'>
                    <h2 className='font-semibold mb-2'>{post.title}</h2>

                </div>
                
                <div className='text-center mt-5 p-2 flex justify-between gap-5'>
                    <h2 className='border-b-3 inline-block font-semibold text-xl 
                    lg:text-4xl'>Content</h2> 
                  
                    { isAuth && 
                        <div className=' flex items-center gap-2'>
                            <Link to={`/dashboard/edit-post/${post.$id}`}> 
                                <button className='border-gray-200 border px-3 p-1 rounded-md 
                                cursor-pointer transition hover:scale-105 duration-200 bg-blue-700 text-white'>Edit</button>
                            </Link>
                            <button className='border-gray-200 border px-3 p-1 rounded-md 
                            cursor-pointer transition hover:scale-105 duration-200 bg-red-600 text-white' onClick={handleDeletePost} >Delete</button>
                        </div> 
                    }

                    <div className=' flex items-center gap-2 max-w-20'>
                        <svg className='' stroke="currentColor" onClick={handleLike} fill={liked ? 'red' : 'black'} strokeWidth="0" viewBox="0 0 512 512" height="1rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                        <h2 className='text-xl' >{count}</h2>
                    </div>
                   
                </div>

                <div className=' rounded-md p-2'>
                    {parse(post.content)}
                </div>
            </div>
            } 

            <div className='border bg-gray-100 border-gray-300 rounded-2xl 
            px-6 py-5 max-w-290 m-auto'>

                <CommentSection Slug = {slug} />

            </div>
        </div>
    )
}

export default Post





