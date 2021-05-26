

const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

app.get('/info', async (req, res) => {
  res.json({message: 'pass!'})
})


it('gets the test endpoint', async done =>{
  const response = await request.get('/info')
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})

