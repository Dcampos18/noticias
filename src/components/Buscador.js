import React, { Component } from 'react'

export default class Buscador extends Component {

    categoryRef = React.createRef()
    countryRef = React.createRef()

    consultarNoticias = (e) => {
        e.preventDefault()

        const noticias = {
            country:  this.countryRef.current.value,
            category: this.categoryRef.current.value
        }

        this.props.consultarNoticias(noticias)

        e.currentTarget.reset()
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m12">  
                    <form onSubmit={this.consultarNoticias}>                 
                        <h2>Noticias por Categoría</h2>
                        <br/>
                        <div className="input-field col s12 m12 l4">
                            <select ref={this.countryRef}>
                                <option value="" defaultValue>Seleccione</option>
                                <option value="ar">Argentina</option>
                                <option value="br">Brasil</option>
                                <option value="cr">Costa Rica</option>
                                <option value="us">Estados Unidos</option>
                                <option value="es">España</option>
                                <option value="fr">Francia</option>
                                <option value="mx">México</option>
                                <option value="nz">Nueva Zelanda</option>
                                <option value="pa">Panamá</option>
                                <option value="ve">Venezuela</option>
                            </select>
                            <label>País</label>
                        </div>
                        <div className="input-field col s12 m12 l4">
                            <select ref={this.categoryRef}>
                                <option value="" defaultValue>Seleccione</option>
                                <option value="general">Generales</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                            <label>Categoría</label>
                        </div>
                        <div className="input-field col s12 m12 l4 enviar">
                            <input type="submit" className="btn-large amber darken-2" value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
