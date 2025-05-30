/**
 * Точка входа. Запуск express-сервера.
 * @module index
 */

const express = require('express')

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

app.listen(PORT, () => {
  /**
   * Сервер успешно запущен
   * @event listen
   * @memberof module:index
   */
  console.log(`Сервер запущен на порту ${PORT}`)
}) 