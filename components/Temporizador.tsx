import styles from '../styles/Temporizador.module.css' 

   
interface TemporizadorProps {
  duracao: number
  tempoEsgostado: () => void
}
export default function Temporarizador(props) {
  return (
    <div>
      <div className={styles.temporizador}></div>
    </div>
  )
}