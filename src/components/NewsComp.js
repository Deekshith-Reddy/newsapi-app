import React from 'react'

const NewsComp = ({object, query}) => {
    return (
        <div className="NewsComp">
            <div className="news-details">
                <h3>{object.title}</h3>
                <p>{object.description}</p>
                <button className="btn">
                    <a href={object.url} target="_blank" rel="noreferrer">Get News</a>
                </button>
            </div>
            

            <div className="product-image">
                <img src={object.urlToImage} alt={query} className="src" />
            </div>
            
        </div>
    )
}

export default NewsComp
