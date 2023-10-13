import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Filmes.css";

export default function Filmes() {

  const [dadosDoJson, setDadosDoJson] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDadosDoJson() {
      try {
        const response = await axios.get('/filme.json');
        setDadosDoJson(response.data);
      } catch (error) {
        console.error('Erro na solicitação:', error);
        setErro('Erro ao carregar o arquivo');
      }
    }

    carregarDadosDoJson();
  }, []);

  return (
    <>
    {/* <div className='body'>
      <h1>OLAAAA</h1>
      <div className='card-filme'>
        <div className='card_content'>
          <h2 className='card_titulo'>ENROLADOS</h2>
          <h4 className='card_lancamento'> Lançamento: 7 de Janeiro de 2011 </h4>
          <p className='card_genero'>Animação</p>

        </div>


      </div>
    </div> */}
    <h1 className='title-l'>listagem de Filmes</h1>
  <div className='body-card'>
    <div className="cards">
          {erro ? (
              <div className="erro">
                <p>{erro}</p>
              </div>
            ) : (
              dadosDoJson.map((filme, index) => (

                <div className='card_conteudo' key={index}>
                  <img className='img-card' src={`/${filme.capa}.jpeg`}/>
                  <h1 className='card_id'><b></b>{filme.id}</h1>
                  <h2 className='card_titulo'><b className='nomes-jso'>Nome: </b>{filme.Nome}</h2>
                  <h4 className='card_lancamento'><b>Lançamento: </b>{filme.dtLancamento}</h4>
                  <h4 className='card_genero'><b>Gênero: </b>{filme.genero}</h4>
                  <br></br>
                  <br></br>
                </div>

              ))
            )}
      </div>
    </div> 
    </>
  )
}
