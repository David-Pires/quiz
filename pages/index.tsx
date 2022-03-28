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
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes(){ 
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    console.log(idsDasQuestoes)
    setIdsDasQuestoes(idsDasQuestoes)
  } 

  async function carregarQuestao(idQuestao: number){ 
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  } 

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  
  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice]
  }
  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }
  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }
  function finalizar() {

  }
   
  return (    
      <Questionario
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />             
  )
}
