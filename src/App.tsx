import Heading from './components/Heading'
import styles from './components/Heading.module.css'

function App() {

  const pessoa = {
    nome: 'arthur',
    sobrenome: 'vitor',
    idade: 21
  };

  return (
    <>
      <Heading attribute={`${styles.heading} ${styles.fontcolor}`}>Olá mundo</Heading>
      <Heading attribute={`${styles.heading}`} pessoa={pessoa}>Sistema diz oi</Heading>
    </>
  )
}

export default App