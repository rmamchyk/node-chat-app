var generateMessage = (from, text) => {
  return {
    from, text, createdAt: new Date().getTime()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  var message = {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
  return message;
};

module.exports = {
  generateMessage,
  generateLocationMessage
};
