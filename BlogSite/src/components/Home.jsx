
import React, { useEffect, useState } from 'react'
import appwriteServices from '../appwrite/config'
import PostCard from './PostCard';


function Home() {

  const [Posts, setPosts] = useState([]);

  useEffect(() => {

    appwriteServices.getPosts([]).then((posts) => {
      if(posts) {
        const resizePost = posts.documents;
        const newPost = resizePost.slice(0,4);
        setPosts(newPost);
        // console.log('this is posts from home page :: ',posts.documents);
        
      }
    })
  }, [])

  

  return (

    <div className='text-center max-w-280 mx-auto mt-10 p-1 flex flex-col gap-y-10'>

      <section className=''>

        <h1 className='text-7xl text-center border-y-2 border-gray-300 
        p-6 md:mt-5 lg:text-8xl lg:mt-8 xl:text-9xl xl:mt-10 xl:py-10 
        2xl:text-[15rem] 2xl:mt-9 2xl:py-18 2xl:font-semibold inline-block m-5'>THE BLOG</h1>

      </section>

      <section className=' flex flex-col gap-5 sm:flex sm:flex-row sm:gap-4 sm:justify-center m-10'>

        <div className='border-gray-400 border p-10 flex flex-col items-center rounded-md hover:scale-105 
          transition-all duration-300 ease-in-out hover:bg-[#e7e6e6]'>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg>

          <h2 className='font-semibold'>Write Blogs</h2>
          <p>Share Your Stories and insights with community</p>
        </div>

        <div className='border border-gray-400 p-10 flex flex-col items-center rounded-md hover:scale-105 
          transition-all duration-300 ease-in-out hover:bg-[#e7e6e6]'>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>

          <h2 className='font-semibold'>Connect With Rexiers</h2>
          <p>Engage with a direct audiance and build follwing</p>
        </div>

        <div className='border border-gray-400 p-10 flex flex-col items-center rounded-md hover:scale-105 transition-all duration-300 ease-in-out hover:bg-[#e7e6e6]'>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z"></path><path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd"></path></svg>
          <h2 className='font-semibold'>Stay Updated</h2>
          <p>Receive Information on latest blogs posts</p>

        </div>

      </section>

      <section className='mt-4'>

        <h2 className='text-left text-xl font-semibold sm:text-2xl'>Featured Posts</h2>

        <div className='rounded-md flex flex-col justify-center sm:grid sm:grid-cols-2 
          sm:justify-evenly md:grid-cols-3 md:gap-2 lg:grid-cols-4'>
          {Posts.map((post) => (
            <div key={post.$id} className='p-2 border border-gray-200 bg-[#a09b9b] rounded-md 
             my-2 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-[#7f7f8c] max-w-60 m-auto'>
              <PostCard {...post} />
            </div>
          ))}
        </div>

      </section> 

      <section className=''>

        <h2 className='text-left text-xl font-semibold sm:text-2xl'>How it Works</h2>

        <div className='flex flex-col gap-4 p-2 sm:grid sm:grid-cols-3'>

          <div className='border border-gray-400 py-6 rounded-md hover:scale-105 transition-all 
            duration-300 ease-in-out hover:bg-[#e7e6e6]'>
            <div className='text-3xl font-semibold'>1</div>
            <h2 className='text-xl font-semibold'>Create an Account</h2>
            <p className='text-sm'>Sign up to start sharing and engaging with both posts</p>
          </div>

          <div className='border border-gray-400 py-6 rounded-md hover:scale-105 transition-all 
            duration-300 ease-in-out hover:bg-[#e7e6e6]'>
            <div className='text-3xl font-semibold'>2</div>
            <h2 className='text-xl font-semibold'>Write and Publish</h2>
            <p className='text-sm'>Craft your blog post and publish it to reach readers</p>
          </div>
          
          <div className='border border-gray-400 py-7 rounded-md hover:scale-105 transition-all 
            duration-300 ease-in-out hover:bg-[#e7e6e6]'>
            <div className='text-3xl font-semibold'>3</div>
            <h2 className='text-xl font-semibold'>Engage with the Community</h2>
            <p className='text-sm'>Comments, like and share posts to connect  with others</p>
          </div>

        </div>

      </section>

    </div>

  )

}


export default Home























