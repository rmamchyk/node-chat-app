var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{
    var from = 'Roman';
    var text = 'Hi there!';

    var res = generateMessage(from, text);

    expect(res).toBeTruthy();
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeTruthy();
    expect(typeof res.createdAt).toBe('number');
  });
});
