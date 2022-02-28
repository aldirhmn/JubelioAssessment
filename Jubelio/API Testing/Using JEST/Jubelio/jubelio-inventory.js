const superagent = require('superagent');
const uuid = require('uuid');
const transport = 'https://api.jubelio.com';
var resp;

var getInventory = async(page, pageSize) => {
    resp = await superagent.get(transport + '/inventory/' + '?page=' + page + '&pageSize=' + pageSize) 
        .set('accept', '*/*')
		.set('Content-Type', 'application/json')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVTRVI6Y3VzdG9tZXJ4aWFvbWkyMUBnbWFpbC5jb206MTg4LjE2Ni4yNTQuMTEwIiwiZXhwIjoxNjQ2MDI4NzMzNzE3LCJpYXQiOjE2NDU5ODU1MzN9.I1HFqIHBKOYT02iJ1tj3S7fCEH4zUZ17sQ51s5A0XhM')
        .then(res => {
            console.log('Get Inventory Request: \n', JSON.stringify(res.request, null, 4));
            console.log('Get Inventory Response : \n', res.statusCode, '\n', JSON.stringify(res.body, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Get Inventory Request: \n', JSON.stringify(err.response.request, null, 4));
            console.log('Get Inventory Response : \n', err.response.statusCode, '\n', JSON.stringify(err.response.body, null, 4));
            return err;
        })
    return resp;
}

(async() => {
    var hit = await getInventory(1, 1);
})();

module.exports = { getInventory };