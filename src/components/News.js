import React from 'react'
import NewsComp from './NewsComp'

const News = ({data}) => {
    return (
        <div className="NewsContainer">
            
            {data.map((obj, idx) => {
                return <NewsComp object = {obj} key={idx}/>
            })}
        </div>
    )
}

export default News
