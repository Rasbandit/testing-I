const axios = require('axios');

const logic = {
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('given not a number');
    }
    return a + b;
  },
  updateQuantity(obj) {
    const modifiedObj = { ...obj };
    modifiedObj.qty += 1;
    return modifiedObj;
  },
  getData() {
    return axios.get('https://swapi.co/api/people/1');
  },
};

module.exports = logic;
