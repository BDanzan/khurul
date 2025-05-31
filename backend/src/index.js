/**
 * Точка входа. Запуск express-сервера.
 * @module index
 */

const express = require('express')
const path = require('path')

// middleware
// const someMiddleware = require('./middleware/someMiddleware')

// routes
// const someRoutes = require('./routes/someRoutes')

// utils
// const logger = require('./utils/logger')

// services
// const someService = require('./services/someService')

/**
 * Экземпляр приложения Express
 * @type {import('express').Express}
 */
const app = express()

/**
 * Порт, на котором запускается сервер
 * @type {number}
 */
const PORT = process.env.PORT || 3000

// Подключение middleware
// app.use(someMiddleware)

// Подключение роутов
// app.use('/api/some', someRoutes)

app.get('/', (req, res) => {
  /**
   * Главная страница
   * @name GET /
   * @function
   * @memberof module:index
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  res.send('Сервер работает')
})

// Обработка 404
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.listen(PORT, () => {
  /**
   * Сервер успешно запущен
   * @event listen
   * @memberof module:index
   */
  console.log(`Сервер запущен на порту ${PORT}`)
}) 