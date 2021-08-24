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

app.get('/cat', ( req: express.Request, res: express.Response) => {
  console.log(req)
  res.send(Cat)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
