import { useState } from "react";

const Card = ({list}) => {

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    console.log(filteredResults)
    const searchItems = searchValue => {
        setSearchInput(searchValue);
        if (searchValue !== "") {
          const filteredData = list.filter((item) => 
            Object.values(item)
              .join("")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
              
          )
          setFilteredResults(filteredData);
        } else {
          setFilteredResults(Object.keys(list))
        }
      }

    return (
        <div className="parent"> 
            <div className="list">
                <div className='searchInput'>
                    <input 
                        type="text"
                        placeholder='Search...' 
                        onChange={(inputString) => searchItems(inputString.target.value)}
                    />
                </div>

                <div className="content">
                    {searchInput.length > 0 
                    ? filteredResults.map((item, index) => (
                        <div className="child">                           
                            <img 
                                className="img"
                                src={`${item.thumbnail.path}.jpg`} alt="" 
                            />
                            <h5 key={index} >{item.name}</h5> 
                            <p>Comics available: {item.comics.available}</p> 
                            <p>Events available: {item.events.available}</p>
                            <p>Series available: {item.series.available}</p>
                            <p>Stories available: {item.stories.available}</p>
                              
                        </div>
                        
                    ))
                    :
                    list.map((item, index) => (
                        <div className="child">                           
                            <img 
                                className="img"
                                src={`${item.thumbnail.path}.jpg`} alt="" 
                            />
                            <h5 key={index} >{item.name}</h5>
                            <ul>
                                <li>Comics : {item.comics.available}</li>
                                <li>Events : {item.events.available}</li>
                                <li>Series : {item.series.available}</li>
                                <li>Stories : {item.stories.available}</li>
                            </ul> 
 
                        </div>
                    )
                    
                    )
                    }
                </div>
            </div>   
        </div>
    )
}

export default Card;