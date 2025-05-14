


import React, { useState, useEffect } from 'react'


function ImageSlider({images}) {

    const  [slider, setSlider] = useState(0);
   

    useEffect(() => {

      const interval = setInterval(() => {

          setSlider(prev => (prev + 1) % images.length)

      },7000)

      return () => clearInterval(interval);

  },);


    
  return (

    <>
    
        <div className='relative w-full'>

          <img className='w-full h-[20vh] md:h-[30vh] lg:h-[45vh] object-cover object-top' src={images[slider]} alt='img1'/>

          <svg onClick={() => setSlider(prev => (prev + 1) % images.length )} className='absolute w-10 z-1 lg:right-15 
          lg:top-45 right-2 top-16 md:right-2 md:top-25 text-gray-500 hover:bg-black/5 
          cursor-pointer size-8' xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

          <svg onClick={() => setSlider(prev => (prev - 1 + images.length) % images.length)} className='absolute w-10 z-1 
          left-2 top-16 lg:left-15 lg:top-45 md:left-2 md:top-25 text-gray-500 hover:bg-black/5
           cursor-pointer size-8' xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          <div className='flex gap-x-1 p-2 justify-center absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2
           bg-black/5 hover:bg-black/10 transition-colors duration-200 rounded-md cursor-pointer'>
            {images.map((_, index) => (
              <h2
                    key={index}
                    className={`px-4 mx-3 rounded-md h-1 cursor-pointer ${slider === index ? 'bg-white' : 'bg-white/50 border-black/1 border'}`}
                    onClick={() => setSlider(index)}
                  >
                </h2>
            ))}
          </div>

        </div>

    </>

  )


}

export default ImageSlider

























































// useEffect(() => {
          
  //     const interval = setInterval(() => {

  //         setSlider(prev => (prev + 1) === 3 ? 0 : prev + 1);

  //     }, 2000);

  //     return () => clearInterval(interval);

  // }, []);



  // useEffect(() => {
          
  //     setInterval(() => (

  //         setSlider(prev => (prev + 1) === 3 ? 0 : prev + 1)

  //     ), 1000);

  //     // return() => clearInterval(interval);

  // }, []);
















