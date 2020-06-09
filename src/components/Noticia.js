import React from 'react'
import imageDefault from '../img/default-image.jpg'

const Noticia = (props) =>{
    const {url, description, title, source} = props.noticia
    let urlToImage = (!props.noticia.urlToImage) ? imageDefault : props.noticia.urlToImage
    
    return(
        <div className="col m6 l4 s12">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="blank" className="waves-effect waves-light btn">Leer</a>
                </div>
            </div>
        </div>
    )
}
export default Noticia