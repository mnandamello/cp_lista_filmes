import React from 'react'
import Layout from "../components/Layout"
import CardCadastro from '../components/CardCadastro/CardCadastro'

export default function Cadastro() {
  return (
    <>
      <Layout>
        <h1 className="h1-home">PetShop</h1>
        <div className="">
          <CardCadastro/>
        </div>
      </Layout>
    </>
  )
}

