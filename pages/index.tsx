import { useState } from 'react'
import Botao from '../components/Botao'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'


const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])
export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {    
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {  
    if(questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }
    

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questao valor={questao} 
      tempoPraResposta={5}
      respostaFornecida={respostaFornecida} 
      tempoEsgotado={tempoEsgotado}/>
      
      <Botao texto="Próxima Questão" href="/resultado" />
    </div>
      
  )
}
