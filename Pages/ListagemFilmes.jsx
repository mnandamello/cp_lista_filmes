import React from 'react'
import Layout from '../components/Layout2'
import Layout2 from '../components/Layout2'
import Filmes from '../components/CarroselFilmes/Filmes'

export default function ListagemFilmes() {
  return (
  <Layout2>
      
    <div className="div-card-filme">
      <Filmes/>

    </div>
    
  </Layout2>
  )
}
