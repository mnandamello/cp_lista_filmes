import React from 'react'
import Layout from '../components/Layout'
import CardLogin from '../components/CardLogin/CardLogin'

export default function Login() {
  return (
    <>
      <Layout>
        <h1 className="h1-home">Login</h1>
        <div className="">
          <CardLogin/>
        </div>
      </Layout>
    </>
  )
}
