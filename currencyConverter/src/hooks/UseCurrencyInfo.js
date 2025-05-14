import { useState, useEffect } from "react";



function UseCurrencyInfo (fromCurrency) {

    const [data, setData] = useState({});

    useEffect( () => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then( (response) => response.json())
        .then( (response) => setData(response[fromCurrency]))
        console.log(data);
        
    }, [fromCurrency])

    return data;
}

export default UseCurrencyInfo;


 









