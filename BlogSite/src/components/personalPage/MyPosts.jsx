
import React, { useEffect, useState } from 'react'
import appwriteServices from '../../appwrite/config'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'

function MyPosts() {

  const [Posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);
  // console.log('this is userData from MyPosts :: ',userData);
  
  useEffect(() => {

    appwriteServices.getPosts([]).then((allPosts) => {
      if(allPosts) {
        setPosts(allPosts.documents);
      }
    })

  }, [])

  const currentUserPost = Posts.filter((userPost) => userPost.userId === userData.$id);
  // console.log('this is currentUserPost from MyPosts :: ',currentUserPost);
  

  return (

    <div className='p-5 max-w-300 mx-auto flex flex-col gap-5'>
      {currentUserPost.map((post) => (
        <div key={post.$id} className='border border-gray-400 bg-gray-50 
          rounded-2xl flex justify-between p-2 transition hover:scale-101 
          duration-200 cursor-pointer' onClick={() => navigate(`/dashboard/post/${post.$id}`)}>

          <div className=' flex flex-col justify-evenly'>
            <p className='font-semibold text-2xl'>
              {post.title}
            </p>
            <div className='line-clamp-3 text-gray-600'>
              {parse(post.content)}
            </div>
          </div>

          <div className="p-2 w-[100em] h-30 overflow-hidden">
            <img
              src={appwriteServices.fileView(post.featuredImage)}
              alt="image"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

      ))}
    </div>

  )

}

export default MyPosts




