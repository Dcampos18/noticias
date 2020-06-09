import React, { Component } from 'react'
import Header from './Header'
import ListadoNoticias from './ListadoNoticias'
import Buscador from './Buscador'
import Error from './Error'

export default class App extends Component {

  state = {
    noticias: [],
    consulta: {},
    error: ''
  }

  componentDidMount(){
    this.setState({
      error: ''
    })
  }

  componentDidUpdate(prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi()
    }
  }

  consultarApi = () => {
    const {category, country} = this.state.consulta
    const appId = 'YOUR API KEY'


    let url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${appId}`
    fetch(url)
      .then(respuesta => {
        console.log(respuesta)
        if(respuesta.status === 'error' || respuesta.status === 429){
          this.setState({
            error: 'API'
          })
          return null
        }
        else{
          return respuesta.json()
        }
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  consultarNoticias = (respuesta) => {
    if(respuesta.country === '' || respuesta.category === ''){
      this.setState({
        error: 'campos'
      })
    }
    else{
      this.setState({
        error: '',
        consulta: respuesta
      })
    }
  }


  render() {
    const error = this.state.error
    let resultado
    if(error === 'campos'){
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    }
    else if(error === 'API'){
      resultado = <Error mensaje="Error en el API" />
    }
    else{
      resultado = <ListadoNoticias noticias={this.state.noticias}/>
    }
    return (
      <div className="contenedor-app">
        <Header title="Noticias"/>
        <div className="container white contenedor-noticias">
          <Buscador consultarNoticias={this.consultarNoticias}/>
          {resultado}
        </div>
      </div>
    )
  }
}
