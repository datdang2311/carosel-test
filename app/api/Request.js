var axios = require('axios');
function getRandomUser(callback) {
  var seft = this;
  var instance = axios.create({
    baseURL: 'https://randomuser.me/api/0.4/?randomapi',
    timeout: 1000,
    headers: {dataType: 'json'},
  });
  instance
    .get()
    .then(function(response) {
      console.log('request thành công');
      console.log(response);
      callback(response.data.results[0]);
    })
    .catch(error => {
      console.log('request thất bại');
      console.log(error);
    });
}
exports.getRandomUser = getRandomUser;
