// Dados
const proffys = [
  {
    name: "Pedro Montes",
    avatar: "https://avatars0.githubusercontent.com/u/29560062?s=460&u=c7f2fc21e628ca7c34554aa74ef742654dcfe3ee&amp;v=4",
    whatsapp: "34996838852",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado pela ZUP e desenvolvimento web, adora jogar e já tentou ser um gamer hardcore, mas sua mãe não deixou. Mais de 200.000 pessoas já passaram por uma das minhas jogatinas.",
    subject: "Química",
    cost: "40",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Montes Pedro",
    avatar: "https://avatars0.githubusercontent.com/u/29560062?s=460&u=c7f2fc21e628ca7c34554aa74ef742654dcfe3ee&amp;v=4",
    whatsapp: "34996838852",
    bio: "Entusiasta das melhores tecnologias de biologia avançada.",
    subject: "Biologia",
    cost: "20",
    weekday: [5],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// Funcionalidades
function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
  return res.render("give-classes.html")
}

// servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicio e configuração do servidor
server
  //configurar arquivos estaticos (css, scripts, imgs)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // start servidor e porta
  .listen(5500)