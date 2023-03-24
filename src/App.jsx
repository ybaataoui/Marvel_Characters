import { useState, useEffect } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY; 

function App() {
  const [list, setList] = useState(null)
console.log(list)
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=youssef&apikey=c7c1991fa21a226b7171cb60cf347ad2&hash=47022c672cd961043e5d2b4ce44db3a5" );

      const json = await response.json();
      setList(json)
  }
  fetchData().catch(console.error)

},[])

  return (
    <div className="App">
      hello
    </div>
  )
}

export default App
