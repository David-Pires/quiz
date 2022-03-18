import styles from '../styles/Questao.module.css'
import QuestaoModel from '../model/questao'
import Enunciado from './Enunciado'
import Resposta from './Resposta'


interface QuestaoProps {
  valor: QuestaoModel
}


  export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
      return questao.respostas.map((resposta, i) => {
        return ( 
        <Resposta 
            valor={resposta}
            indice={i}            
            letra="A"
            corLetra="#F2C866"
          />
        )
    })
  }
  
  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado}/>
      {renderizarRespostas()}
    </div>
  )

}