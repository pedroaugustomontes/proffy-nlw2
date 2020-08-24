const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Marco Bruno",
    avatar: "https://avatars3.githubusercontent.com/u/4096456?s=460&v=4",
    whatsapp: "34996838852",
    bio: "Instrutor de Educação Física",
  }

  classValue = {
    subject: "Educação Física",
    cost: "50",
    // o proffy id vira pelo banco de dados
  }

  classScheduleValues = [
    // o class_id id vira pelo banco de dados, após cadastrado a aula
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 2,
      time_from: 520,
      time_to: 1320
    }
  ]

  await createProffy(db, { proffyValue, classValue, classScheduleValues })

  // Consultar os dados inseridos
})