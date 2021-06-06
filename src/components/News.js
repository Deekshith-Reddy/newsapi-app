import React from 'react'
import NewsComp from './NewsComp'

const News = ({data, query}) => {
    return (
        <div className="NewsContainer">
            
            {data.map((obj, idx) => {
                
                return <NewsComp query = {query} object = {obj} key={idx}/>
            })}
        </div>
    )
}

export default News
