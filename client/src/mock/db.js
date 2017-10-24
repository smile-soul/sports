'use strict'

const faker = require('faker')
const dateformat = require('dateformat')


const example = []
for (let i = 1; i < 1001; i++) {
  example.push({
    'client_id': `emqttd_${faker.random.number({min:10000000, max:20000000})}`,
    'username': faker.internet.userName(),
    'ipaddress': faker.internet.ip(),
    'port': faker.random.number({min:2000, max:5000}),
    'clean_sess': faker.random.arrayElement(['true', 'false']),
    'proto_ver': 4,
    'keepalive': faker.random.number({min:0, max:120}),
    'connected_at': dateformat(faker.date.between('2017-01-02', '2017-02-20'), 'yyyy-mm-dd hh:MM:ss'),
  })
}


module.exports = {
  example,
}
