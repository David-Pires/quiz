/* eslint-disable react/jsx-key */
import styles from "../styles/Questao.module.css";
import QuestaoModel from "../model/questao";
import Enunciado from "./Enunciado";
import Temporizador from './Temporizador';
import Resposta from "./Resposta";

const letras = [
  { valor: 'A', cor: '#f2c866'},
  { valor: 'B', cor: '#f266ba'},
  { valor: 'C', cor: '#85d4f2'},
  { valor: 'D', cor: '#bce596'},

]

interface QuestaoProps {
  valor: QuestaoModel;
  respostaFornecida: (indice: number) => void
  tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
        key={i}
        valor={resposta}
        indice={i}
        letra={letras[i].valor}
        corFundoLetra={letras[i].cor}
        respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador duracao={10} tempoEsgostado={props.tempoEsgotado} />
      {renderizarRespostas()}
    </div>
  )
}
