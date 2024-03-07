// create your App component here
import { useState, useEffect } from "react"
const doggie = "https://dog.ceo/api/breeds/image/random"
function App(){
const [randoDog, setRandoDog] = useState(null)

useEffect(()=>{
    fetch(doggie)
    .then((res) => res.json())
    .then((data)=>{
        setRandoDog(data.message)
        
    })
},[]);

if (!randoDog) {
    return <p>Loading...</p>;
  }


    return (
        <div>
            <img src={randoDog} alt="A Random Dog"/>
        </div>
    )
}


export default App