



import useData from '../ApiContext/ApiContext';


function AddCart2() {

   const {isOpen, setIsOpen} = useData();

  return (



    <>

        <div className=''>

            <div>

                <h2 onClick={() => setIsOpen(true)} className={`p-2 px-2 bg-gray-100 rounded-md absolute top-9 right-10
                    cursor-pointer border border-gray-100 transition-transform duration-200 hover:scale-105 md:right-10 ${isOpen ? 'hidden': ''}`}>
                    🛒 Cart
                </h2>

                

            </div>

        </div>
      
    </>


  )


}


export default AddCart2















