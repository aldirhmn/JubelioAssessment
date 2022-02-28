const superagent = require('superagent');
const uuid = require('uuid');
const transport = 'https://api.jubelio.com';
var resp;

var jubelioLogin = async(email, password) => {
    resp = await superagent.post(transport + '/login')
        .send({
            "email": email,
            "password": password
        })
        .set('accept', '*/*')
		.set('Content-Type', 'application/json')
        .then(res => {
			console.log('Login Validate Request: \n', JSON.stringify(res.request, null, 4));
            console.log('Login Validate Response : \n', res.statusCode, ' \n ', res.body);
            return res;
        })
        .catch(err => {
			console.log('Login Validate Request: \n', JSON.stringify(err.response.request, null, 4));
            console.log('Login Validate Response : \n', err.response.statusCode, ' \n ', err.response.body);
            return err;
        })
    return resp;
}

(async() => {
    var hit = await jubelioLogin("customerxiaomi21@gmail.com", "Jubelio@1234");
})();

module.exports = { jubelioLogin };