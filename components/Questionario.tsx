import styles from '../styles/Questionario.module.css'
import QuestaoModel from '../model/questao'

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irPraProximoPasso: () => void
}
export default function Questionario(props: QuestionarioProps) {
  return (
    <div>

    </div>
  )
}