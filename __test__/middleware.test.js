const timeStamp = require('../middleware/timestamp.js')
const logger = require('../middleware/logger.js')
const modelMaker = require('../middleware/modelMaker.js')
const notFound = require('../middleware/404.js')
const serverErr = require('../middleware/500.js');

// resource: https://stephencharlesweiss.com/jest-testing-spyon-consoles/
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
const consoleSpyErr = jest.spyOn(console, 'error').mockImplementation()

describe('testing middleware functions', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    consoleSpyErr.mockClear();
  });

  test('timestamp fn attaches requestTime to req obj', () => {
    let req = {};
    let res = {};
    let next = ()=>{};
    timeStamp(req, res, next);
    expect(req.requestTime).toBeTruthy();
  })

  test('logger prints to console', () => {
    let req = {
      requestTime: "request time",
      method: "method",
      path: "path",
    };
    let res = {};
    let next = ()=>{};
    logger(req, res, next);
    expect(console.log).toHaveBeenLastCalledWith("request time", "method", "path");
  })

  test('modelMaker function test', () => {
    let req = {
      params: {model: 'products'}
    }

    let res = {};
    let next = ()=>{};

    modelMaker(req, res, next);
    expect(req.model).toBeTruthy();
  })

  test('404 will send a msg', () => {
    let req = {};
    let res = {};
    res.status = () => res;
    res.send = () => res;
    let next = ()=>{};
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    notFound(req, res, next);
    expect(res.status).toHaveBeenLastCalledWith(404);
    expect(res.send).toHaveBeenLastCalledWith('404 Not Found!');
  })

  test('500 will send a msg', () => {
    let err = {
      stack: 'fake stack'
    };
    let req = {};
    let res = {};
    res.status = () => res;
    res.send = () => res;
    let next = ()=>{};
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    serverErr(err, req, res, next);
    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.send).toHaveBeenLastCalledWith('500 Server Error!');
    expect(console.error).toHaveBeenLastCalledWith('fake stack');
  })

})