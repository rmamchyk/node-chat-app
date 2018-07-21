const moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from, text, createdAt: moment().valueOf()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  var message = {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
  return message;
};

module.exports = {
  generateMessage,
  generateLocationMessage
};
