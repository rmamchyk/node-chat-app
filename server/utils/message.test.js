var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

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

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var from = 'Roman';
    var latitude = 50.4287984;
    var longitude = 30.3794181;

    var res = generateLocationMessage(from, latitude, longitude);

    expect(res).toBeTruthy();
    expect(res.from).toBe(from);
    expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(res.createdAt).toBeTruthy();
    expect(typeof res.createdAt).toBe('number');
  });
});
