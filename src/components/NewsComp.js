import React from 'react'

const NewsComp = ({object, query}) => {

    var id = object.author;
    id = id === null ? query : id
    return (
        <div className="NewsComp">
            <div className="news-details">
            
                <h3>{object.title}</h3>
                <p>{object.description}</p>
                <a href={object.url} target="_blank" rel="noreferrer">
                <button data-hover={id}className="btn"><div>Get News</div>
                </button></a>
            </div>
            

            <div className="product-image">
                <img src={object.image} alt={query} className="src" />
            </div>
            
        </div>
    )
}

export default NewsComp
