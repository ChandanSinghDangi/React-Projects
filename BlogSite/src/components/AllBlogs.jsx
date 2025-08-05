
import React, { useEffect, useState } from 'react';
import appwriteServices from '../appwrite/config';
import parse from 'html-react-parser';
import { Link, useNavigate } from 'react-router-dom';


function AllBlogs() {

  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate =useNavigate();

  useEffect(() => {

    appwriteServices.getPosts([]).then((post) => {
      if(post) {
        // console.log('this is a Post from AllBlogs :: ',post.documents);
        // console.log('this is a Post from AllBlogs with no document :: ',post);
        
        setPost(post.documents);

        // console.log('this is showAllPosts from AllBlogs :: ',Post);
      }
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return !loading ? 

      <div className='p-5 max-w-300 mx-auto flex flex-col gap-5'>
        {Post.map((post) => (
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
  
  : null;

    
  
}


export default AllBlogs





