
import React from 'react'



function Input({label, placeholder, className, type, ref, ...props}) {

    
  return (

    <>
    
      {label && <div>
        <label htmlFor={label} className='text-xl text-gray-400'>{label}</label>
      </div>
      }
      
      <input 
        type={type} 
        id={label} 
        placeholder={placeholder}
        className={`${className}`}
        {...props}
        ref={ref}   
      />
      
    </>
  )
}


export default Input




















