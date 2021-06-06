import React from 'react'
import {useState, useEffect} from 'react'

const SideContainer = ({searchQuery, popular, setSearchQuery}) => {

    const [searchTerm, setSearchTerm] = useState(searchQuery)

    useEffect(() => {
        setSearchQuery(searchTerm)
    })

    

    return (
        <div className="SideContainer">
            <h2>Popular</h2>
            {popular.map((value, idx) => {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                return <a href="#" className="popularLinks" onClick = {(e) => setSearchTerm(value)}><p>{value}</p></a>
            })}
        </div>
    )
}

export default SideContainer
