import { useEffect, useState } from 'react'
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

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock)

  async function carregarIdsDasQuestoes(){ 
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  } 

  async function carregarQuestao(idQuestao: number){ 
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    console.log(json)
  } 

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])
  
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
