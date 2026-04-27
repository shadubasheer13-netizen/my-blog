import { useState } from "react";
import { useEffect } from "react";

function W3d3() {
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then(res => res.json())
        .then(data => setQuotes(data.quotes.slice(10,20)))
        .catch(err => console.log("errror undeeey"))
    },[])

    return(
        <>
        {quotes.map(item =>(
            <h1 key={item.id}>{item.quote}</h1>
        ))}</>
    )
}
export default W3d3