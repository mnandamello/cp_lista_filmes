import React from 'react'
import './CardCadastro.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const schema = yup.object().shape({
  nome: yup.string().required('O campo Nome é de preenchimento obrigatório!'),
  usuario: yup.string().required('O campo Usuário é de preenchimento obrigatório'),
  email: yup.string().email('Insira um endereço de e-mail válido').required("O campo Email é de preenchimento obrigatório"),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required("O campo Senha é de preenchimento obrigatório")
});


export default function CardCadastro() {

  const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({ resolver: yupResolver(schema )});

  function inserirCliente(cliente) {

    // Salvar os dados no localStorage
    const listaClientesLocalStorage = JSON.parse(localStorage.getItem('listaClientes')) || [];
    listaClientesLocalStorage.push(cliente);
    localStorage.setItem('listaClientes', JSON.stringify(listaClientesLocalStorage)); //salva as infos em um json

    // Redirecionar para a página de login
    setTimeout(() => {
      notify();
      window.location.href = '/Login';
    }, 2100);
  }

  const notify = () => toast('🦄 Cadastro criado!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <>
    <ToastContainer position="top-right"
      autoClose={2000 }
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <div className='card-cad'>
      <form action="/Login" onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Cadsatre-se</legend>
          
          <label className='label-cad' htmlFor="nome">Nome: 
              <input type="text" {...register('nome')} />
              <span className='span-error'>{ errors.nome?.message }</span>
          </label>
          <br />
          <br />
          <label htmlFor="usuario">Usuario: 
              <input type="text" {...register('usuario')}/>
              <span className='span-error'>{ errors.usuario?.message }</span>
          </label>
          <br />
          <br />
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
          <button onClick={notify} type="submit">Cadastrar</button>
        </fieldset>
      </form>
    </div>
    </>
  )
}
