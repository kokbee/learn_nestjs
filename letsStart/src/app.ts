import * as express from "express"

const app = express.default()
const port: number = 5000

app.get('/', ( req: express.Request, res: express.Response) => {
  console.log(req)
  res.send('Hello World!')
})

app.get('/cat', ( req: express.Request, res: express.Response) => {
  console.log(req)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
