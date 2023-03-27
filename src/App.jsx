import { useState, useEffect } from 'react'

import './App.css'
import Card from './Comonents/Card';
import NavBar from './Comonents/NavBar';
import List from './Comonents/List';

const API_KEY = import.meta.env.VITE_APP_API_KEY; 

function App() {
  const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  
console.log(list)

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=youssef&apikey=c7c1991fa21a226b7171cb60cf347ad2&hash=47022c672cd961043e5d2b4ce44db3a5" );

      const json = await response.json();
      const data = json.data
      setList(data.results)
      
  }
  fetchData().catch(console.error)

},[])

  return (
    <div className="parent-wrapper">
      <NavBar />
      <Card 
        list = {list}
      />
      
    </div>
  )
}

export default App
