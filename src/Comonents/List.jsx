import { useState, useEffect } from "react";
const List = () => {

    const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  
console.log(list)

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters/1011334?ts=youssef&apikey=c7c1991fa21a226b7171cb60cf347ad2&hash=47022c672cd961043e5d2b4ce44db3a5" );

      const json = await response.json();
      const data = json.data
      setList(json)
      
  }
  fetchData().catch(console.error)

},[])

    return (
        <div>
            
        </div>
    )
}

export default List;