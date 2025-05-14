

import React from 'react'
import useData from '../ApiContext/ApiContext'


function CartItems() {

    const {isOpen, setIsOpen, addCart,setAddCart} = useData();

    const deleteItem = (id) => {

        setAddCart(addCart.filter((item) => item.id !== id))
        console.log("DeleteItem Working");

    }

    const finalPrice = addCart.reduce((accumulator, currentValue) => {

        return parseFloat((accumulator + currentValue.price).toFixed(3));

    },0)

  return (

    <>

    <div className={isOpen ? 'fixed h-[100vh] w-[100%] bg-black bg-opacity-10 top-0 right-0 z-10' : ''}
     style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setIsOpen(false)}>

        <div className={isOpen ? 'absolute h-[100vh] w-[65%] sm:w-[48%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-gray-300 top-0 right-0 overflow-y-auto p-2 ' : 'hidden'} onClick={(e) => e.stopPropagation()}>
            <div className={isOpen ? 'flex justify-end p-2 px-5 cursor-pointer mb-2 ' : 'hidden'} onClick={() => setIsOpen(false)}>✖</div>

            <div className='border-2 border-gray-400 rounded-md py-5 px-2 flex flex-col gap-y-3'>

                {addCart.map(product => 
                    
                    <div key={product.id} className='border-gray-400 border-2 rounded-md p-3 flex gap-x-4'>

                        <div className=''>

                            <img className='w-40 h-auto object-fit' src={product.image} alt={product.title} />

                        </div>

                        <div className='flex flex-col gap-y-3'>

                            <div>

                                <span>Name: {product.title}</span>

                            </div>

                            <div>

                                <span>Price: ${product.price}</span>

                            </div>

                            <div className='flex justify-center'>

                                <button className='border-red-500 border p-1 px-2 rounded-md
                                text-red-500 cursor-pointer' onClick={() => deleteItem(product.id)}>Delete</button>

                            </div>


                        </div>

                    </div>

                )}

                <div className='font-semibold text-xl'>
                    {finalPrice > 0 ? (
                    <div>Total Price: ${finalPrice}</div>
                    ) : (
                    <span className="text-gray-500">
                        Your Cart is Empty, Bro! Are You Broke? If not, go buy something, dawg!
                    </span>
                    )}
              </div>

            </div>

        </div>

    </div>x

    </>


  )


}


export default CartItems












