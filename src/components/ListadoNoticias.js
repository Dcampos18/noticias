import React, { Component } from 'react'
import Noticia from './Noticia'

export default class ListadoNoticias extends Component {
    render() {
        return (
            <div className="row">
                {this.props.noticias.map(noticia => (
                    <Noticia 
                        key={noticia.url}
                        noticia = {noticia}
                    />
                ))}
            </div>
        )
    }
}
