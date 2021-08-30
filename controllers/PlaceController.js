const GetPlace = async (req, res) => {
  res.send({ msg: `${req.method}Place` })
}

const PostPlace = async (req, res) => {
  res.send({ msg: `${req.method}Place is posted`, data: req.body || [] })
}

module.exports = {
  GetPlace,
  PostPlace
}
