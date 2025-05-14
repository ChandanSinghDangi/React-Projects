

import { useContext} from "react";
import React from "react";




export const DataContext = React.createContext({


    data:[],

    addToCart: (products) => {}



});




export const DataContextProvider = DataContext.Provider




export default function  useData() {


    return useContext(DataContext);


}


// async function getData() {
        
//     const response  = await fetch('https://fakestoreapi.com/products');

//     const data = await response.json();

//     return data;

// }

// const data = getData();





























