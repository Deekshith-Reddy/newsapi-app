import React from 'react'
import {useState} from 'react'
const Header = ({setSearchQuery}) => {

    const [searchTerm, setSearchTerm] = useState("google")


    return (
        <div className="Header">
            <h2>NewsApi</h2>
            <div className="search">
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={(e)=> {setSearchQuery(searchTerm)}}>Search</button>
            </div>
            
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Website</h3>
        </div>
    )
}

export default Header
