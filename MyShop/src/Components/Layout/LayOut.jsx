

import React, {  useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ImageSlider from '../CarosuleSlider/ImageSlider'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import img4 from '../../Images/img1.jpg';
import img5 from '../../Images/img2.jpg';
import img6 from '../../Images/img3.jpg';
import { DataContextProvider } from '../ApiContext/ApiContext'
import AddCart from '../MainContent/AddCart'
import AddCart2 from '../MainContent/AddCart2'
import CartItems from '../MainContent/CartItems'




function LayOut() {

  const sliderImages = [img4,img5,img6];

  const [data, setData] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {

    async function getData() {
      
      const response = await fetch('/api/products');
      if(!response) return console.log("Didn't got Response fro Api");
      
      const data = await response.json();
      if(!data) return console.log("Json Data is fetched form Api but  not' refelecting in UI");
      setData(data);
      
    }

    getData();

  },[])

  
    function addToCart(products) {

      setAddCart(prev => [...prev,products]);
      console.log(addCart);
      
  
    }
  
    

  return (

   <DataContextProvider value={{data, addToCart, addCart, setAddCart, isOpen, setIsOpen}}>

    
    <Header />

    <ImageSlider images={sliderImages}/>

    <Outlet />

    <Footer />

    <AddCart2 />

    <CartItems />

   
   </DataContextProvider>

  )


}

export default LayOut












