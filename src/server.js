require('express')()
  .get("/", (req, res) => {
    return res.send("Olá servidor!")
  })
  .get("/study", (req, res) => {
    return res.send("Olá servidor!")
  })
  .listen(5500)