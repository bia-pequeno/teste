import './App.css'
import Conteudo from './assets/Componentes/Conteudo'
import Titulo from './assets/Componentes/titulo'
import gatinho from './assets/img/gato.jpg'
function App() {

  const nome = "bea"

  function somatoria(x,y){
    return x + y
  }
  return (
    <>
    <Titulo/>
    <Conteudo/>
    <img src={gatinho} alt="" className='tamanho' />
    
    <h2>Olá meu nome é {nome}</h2>
    <p>{somatoria(8,12)}</p>
    
    </>
  )
}

export default App
