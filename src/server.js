// servidor
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicio e configuração do servidor
server
  // receber os dados do red.body
  .use(express.urlencoded({ extended: true }))
  //configurar arquivos estaticos (css, scripts, imgs)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  // start servidor e porta
  .listen(5500)