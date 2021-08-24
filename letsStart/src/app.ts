import * as express from 'express'
import {
  Cat,
  CatType,
} from './app.module'

const app = express.default()
const port: number = 5000

app.get('/', ( req: express.Request, res: express.Response) => {
  console.log(req.header)
  res.send('Hello World!')
})

app.route('/cats/:name').get(( req: express.Request, res: express.Response) => {
  const { name } = req.params
  const cats = Cat.find( cat => cat.name === name )
  try {
    res.status(200).send({
      success: true,
      data: {
        cats
      },
    })
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message
    })
  }
}).post(( req: express.Request, res: express.Response) => {
  const { name } = req.params

  const cats = Cat
  try {
    res.status(200).send({
      success: true,
      data: {...cats, 5: { name } }
    })
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message
    })
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
