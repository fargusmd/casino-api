const axios = require('axios');
const { newFakePlayer } = require('./faker');
const addRandomToDB = () => {
  let newPlayer = newFakePlayer();
  newPlayer.phone = newPlayer.phone.replace(/^\D+/g, '');
  newPlayer.cardType = 'gold';
  console.log(newPlayer);
  axios
    .post('/api/v1/players', newPlayer)
    .then((res) => alert('ADDED'))
    .catch((err) => console.log(err));
};
module.exports = addRandomToDB;
