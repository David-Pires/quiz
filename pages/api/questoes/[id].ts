/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
  res.status(200).json({ 
    id: +req.query.id,
    name:'Pedro #02'

  })
}