import styles from '../styles/Temporizador.module.css' 
import { CountdownCircleTimer} from 'react-countdown-circle-timer'
   
interface TemporizadorProps {
  duracao: number
  tempoEsgostado: () => void
}
export default function Temporizador(props: TemporizadorProps) {
  return (   
      <div className={styles.temporizador}>
        <CountdownCircleTimer
          duration={props.duracao}
          size={120}
          isPlaying
          onComplete={props.tempoEsgostado}
          colors={[
            ['#bce596', 0.33],
            ['#f7b801', 0.33],
            ['#ed827a', 0.33],
          ]}>            
            {({ remainingTime}) => remainingTime}
          </CountdownCircleTimer>
      </div>    
  )
}