import React from 'react'
import './CardLogin.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  email: yup.string().required("O Campo Hora é de preenchimento obrigatório"),
  senha: yup.string().required("O Campo Hora é de preenchimento obrigatório")
}).required();

export default function CardLogin() {

  const {register, handleSubmit, formState: {errors}, setValue, setFocus} = useForm({resolver: yupResolver(schema)});


  //o data são os valores do nosso form de cadastro, o hook form ja trata desse jeito
  const handleLogin = (data) => { 
    const listaClientesLocalStorage = JSON.parse(localStorage.getItem('listaClientes')) || [];

    // Verificar se as credenciais coincidem com os dados do localStorage
    const clienteEncontrado = listaClientesLocalStorage.find(cliente => cliente.email === data.email && cliente.senha === data.senha);

    if (clienteEncontrado) {
      // Credenciais válidas, permita o acesso ao aplicativo
      toast.success('🦄 Login feito com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.href = '/ListagemFilmes';
      }, 2100);
      // Redirecionar o usuário para a página principal ou fazer qualquer ação necessária.
    } else {
      // Credenciais inválidas, exibir uma mensagem de erro
      toast.error('Credenciais Inválidas', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  

  return (
    <>
    <ToastContainer position="top-right"
      autoClose={5000 }
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
      <div className='card-log'>
        <form action="/ListagemFilmes" onSubmit={handleSubmit(handleLogin)}>
          <fieldset>
            <legend>Faça seu Login</legend>

            <label htmlFor="email">E-Mail: 
                <input type="email" {...register('email')}/>
                <span className='span-error'>{ errors.email?.message }</span>
            </label>
            <br />
            <br />
            <label htmlFor="senha">Senha: 
                <input type="text" {...register('senha')}/>
                <span className='span-error'>{ errors.senha?.message }</span>
            </label>
            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}
