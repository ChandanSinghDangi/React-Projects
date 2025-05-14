
import React, { useState } from 'react';
import useData from '../ApiContext/ApiContext';

function AddCart() {
  const { addCart: cartItems, setAddCart } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const finalPrice = cartItems.reduce((acc, curr) => {
    return parseFloat((acc + curr.price).toFixed(5));
  }, 0);

  const deleteItem = (id) => {
    setAddCart(cartItems.filter((item) => item.id !== id));
    console.log("DeleteItem Working");
  };

  const styles = {
    overlay: {
      display: isOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
    },
    drawer: {
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '350px',
      backgroundColor: 'lightgray',
      padding: '20px',
      boxShadow: '-4px 0 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      overflowY: 'auto',
    },
    closeBtn: {
      background: 'transparent',
      fontSize: '24px',
      cursor: 'pointer',
      float: 'right',
    },
    cartBtn: {
      padding: '5px 10px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <div>

        <button style={styles.cartBtn} onClick={() => setIsOpen(true)}>🛒 Cart</button>

        <div style={styles.overlay} onClick={() => setIsOpen(false)}>
          <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <h2 className='text-xl'>Your Cart</h2>
            <div className='h-11 w-full mb-2'>
              <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>✖</button>
            </div>

            <div className='border-2 border-purple-400 p-2 rounded-md flex flex-col gap-y-3'>
              {cartItems.map((product) => (
                <div key={product.id} className='border-2 border-purple-400 p-2 rounded-md flex flex-col gap-y-2'>
                  <div className='flex gap-10'>
                    <img className='h-auto w-25' src={product.image} alt={product.title} />
                    <div className='flex flex-col justify-center'>
                      <button onClick={() => deleteItem(product.id)} className='border border-red-500
                      text-red-500 hover:bg-red-500 hover:text-white cursor-pointer px-1 rounded-md'>Delete</button>
                    </div>
                  </div>

                  <div>
                    <span><span className='font-semibold'>Name: </span>{product.title}</span>
                  </div>

                  <div>
                    <span><span className='font-semibold'>Price: </span>${product.price}</span>
                  </div>
                </div>
              ))}

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

        </div>

      </div>

    </>
  );
}

export default AddCart;











































