import { useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'


const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

const BASE_URL = 'http://localhost:3000/api'


async function carregarIdsDasQuestoes(){ 
  const resp = await fetch(``)
} 

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irProProximoPasso() {

  }
    

  return (    
    
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irProProximoPasso}
      />    
         
  )
}
