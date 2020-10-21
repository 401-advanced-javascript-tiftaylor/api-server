const supertest = require('supertest');

const app = require('../lib/server.js').app;
const testServer = supertest(app);

describe('testing express server app', () => {

  // testing products
  test('get /products object', () => {
    return testServer.get('/products')
      .then(res => {
        expect(res.body.count).toEqual(1)
      })
  })

  test('post an obj /products', () => {
    return testServer.post('/products')
      .send({ name: "powder" })
      .then(res => {
        expect(res.body.name).toEqual("powder");
      })
  })

  test('get specific obj from /products:id', () => {
    return testServer.get('/products/1')
      .then(res => {
        expect(res.body.id).toEqual("1")
      })
  })

  test('put a new obj /products:id', () => {
    return testServer.put('/products/1')
      .send({name: "tampon"})
      .then(res => {
        expect(res.body.name).toEqual("tampon")
      })
  })

  test('get /products object', () => {
    return testServer.delete('/products/1')
      .then(res => {
        expect(res.body).toEqual({})
      })
  })

  // testing categories
  test('get /categories object', () => {
    return testServer.get('/categories')
      .then(res => {
        expect(res.body.count).toEqual(2)
      })
  })

  test('post an obj /categories', () => {
    return testServer.post('/categories')
      .send({ name: "outdoors" })
      .then(res => {
        expect(res.body.name).toEqual("outdoors");
      })
  })

  test('get specific obj from /categories:id', () => {
    return testServer.get('/categories/1')
      .then(res => {
        expect(res.body.id).toEqual("1")
      })
  })

  test('put a new obj /categories:id', () => {
    return testServer.put('/categories/1')
      .send({name: "yard"})
      .then(res => {
        expect(res.body.name).toEqual("yard")
      })
  })

  test('get /categories object', () => {
    return testServer.delete('/categories/1')
      .then(res => {
        expect(res.body).toEqual({})
      })
  })

})