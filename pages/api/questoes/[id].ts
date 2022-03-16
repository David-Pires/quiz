import questoes from '../bancoDeQuestoes'
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharResposta()
    res.status(200).json(questaoSelecionada.paraObjeto())
  } else {
    res.status(204).send()
  }

  // res.status(200).json(questoes[0].paraObjeto())
}