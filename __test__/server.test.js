const supergoose = require('@code-fellows/supergoose');

const app = require('../lib/server.js').app;
const testServer = supergoose(app);

describe('testing express server app', () => {

  // testing products
  test('post an obj /products', () => {
    return testServer.post('/products')
      .send({ 
        name: 'powder',
      })
      .then(res => {
        expect(res.body.name).toEqual("powder");
      })
  })

  test('get /products object & get /product/id specifically', () => {
    return testServer.get('/products')
      .then(res => {
        expect(res.body.count).toEqual(1);
        const id = res.body.results[0].id;
        return testServer.get(`/products/${id}`)
          .then(res => {
            expect(res.body.id).toEqual(id);
          })
      })
  })

  test('put a new obj /products:id', () => {
    return testServer.post('/products')
      .send({ 
        name: 'powder',
      })
      .then(res => {
        expect(res.body.name).toEqual("powder");
        const id = res.body.id;
        return testServer.put(`/products/${id}`)
          .send({name: "tampon"})
          .then(res => {
            expect(res.body.name).toEqual("tampon")
          })
      })
  })

  test('delete /products object', () => {
    return testServer.post('/products')
    .send({ 
      name: 'powder',
    })
    .then(res => {
      expect(res.body.name).toEqual("powder");
      const id = res.body.id;
      return testServer.delete(`/products/${id}`)
        .then(res => {
          expect(res.body).toEqual({})
        })
    })
  })

  // // testing categories
  test('post an obj /categories', () => {
    return testServer.post('/categories')
      .send({ 
        name: 'baby',
      })
      .then(res => {
        expect(res.body.name).toEqual("baby");
      })
  })

  test('get /categories object & get /categories/id specifically', () => {
    return testServer.get('/categories')
      .then(res => {
        expect(res.body.count).toEqual(1);
        const id = res.body.results[0].id;
        return testServer.get(`/categories/${id}`)
          .then(res => {
            expect(res.body.id).toEqual(id);
          })
      })
  })

  test('put a new obj /categories:id', () => {
    return testServer.post('/categories')
      .send({ 
        name: 'pets',
      })
      .then(res => {
        expect(res.body.name).toEqual("pets");
        const id = res.body.id;
        return testServer.put(`/categories/${id}`)
          .send({name: "yard"})
          .then(res => {
            expect(res.body.name).toEqual("yard")
          })
      })
  })

  test('delete /categories object', () => {
    return testServer.post('/categories')
    .send({ 
      name: 'yard',
    })
    .then(res => {
      expect(res.body.name).toEqual("yard");
      const id = res.body.id;
      return testServer.delete(`/categories/${id}`)
        .then(res => {
          expect(res.body).toEqual({})
        })
    })
  })


})