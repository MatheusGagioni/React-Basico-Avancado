import { useState } from 'react'
import './App.css'

import logoImg from './Assets/logo.png'

const allFrases = [
  {
    id: 1,
    nome: "Motivação",
    frases: [
      'A jornada mais longa começa com um único passo.',
      'Você nunca sabe quão forte é até que ser forte seja a sua única escolha.',
      'O mundo precisa do seu brilho, não esconda sua luz.',
      'Não tenha medo de fracassar, tenha medo de não tentar.',
      'Nunca diga nunca, pois os limites são como os medos: sempre são apenas ilusão.',
      'Para aprender a ter sucesso, é preciso primeiro aprender a fracassar.',
    ]
  },
  {
    id: 2,
    nome: "Bem estar",
    frases: [
      'Cuidar da sua saúde e bem-estar também é se amar.',
      'Não é egoísmo cuidar da sua saúde mental. Cuide de si mesmo antes de qualquer outro ser.',
      'O primeiro dos bens, depois da saúde, é a paz interior.',
      'Dizer não é um ato de amor-próprio.',
      'Cuidar da mente é tão essencial quanto cuidar do corpo.',
      'Não há problema em estabelecer limites para proteger sua saúde mental.'
    ]
  }
]

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwithCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }
  
  return (
      <div className="container">
        <img
          alt="Logo frases"
          src={logoImg}
        />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className='category-button'
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}

          onClick={ () => handleSwithCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

        <button className='category-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p> }

      </div>
      
  )
}

export default App
