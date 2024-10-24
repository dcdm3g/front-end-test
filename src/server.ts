import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3000

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('static'))

app.get('/', (_, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('HTTP Server Running!')
})
