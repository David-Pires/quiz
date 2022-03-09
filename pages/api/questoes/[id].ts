/* eslint-disable import/no-anonymous-default-export */

import questoes from '../bancoDeQuestoes'
export default (req, res) => {
  
  res.status(200).json(questoes[0].paraObjeto())
}