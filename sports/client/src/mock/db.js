'use strict'

const faker = require('faker')
const dateformat = require('dateformat')

const plugins = []
const pluginNames = [
  'emqx_auth_http',
  'emqx_auth_clientid',
  'emqx_auth_ldap',
  'emqx_auth_mongo',
  'emqx_auth_mysql',
  'emqx_auth_pgsql',
  'emqx_auth_redis',
  'emqx_auth_username',
  'emqx_backend_mongo',
  'emqx_backend_mysql',
  'emqx_backend_pgsql',
  'emqx_backend_redis',
  'emqx_bridge_kafka',
  'emqx_dashboard',
  'emqx_modules',
  'emqx_recon',
  'emqx_reloader',
  'emqx_retainer',
]
const pluginDescriptions = [
  'EMQ X Authentication with ClientId/Password',
  'EMQ X Authentication/ACL with HTTP API',
  'EMQ X Authentication/ACL with LDAP',
  'EMQ X Authentication/ACL with MongoDB',
  'EMQ X Authentication/ACL with MySQL',
  'EMQ X Authentication/ACL with PostgreSQL',
  'EMQ X Authentication/ACL with Redis',
  'EMQ X Authentication with Username/Password',
  'EMQ X Mongodb Backend',
  'EMQ X MySQL Backend',
  'EMQ X PostgreSQL Backend',
  'EMQ X Redis Backend',
  'EMQ X Kafka Bridge',
  'EMQ X Dashboard',
  'EMQ X Modules',
  'Recon Plugin',
  'Reloader Plugin',
  'EMQ X Retainer',
]
for (let i = 1; i < 19 ; i++) {
  plugins.push({
    'id': i,
    'name': pluginNames[i-1],
    'version': '2.1.0',
    'description': pluginDescriptions[i-1],
    'active': faker.random.boolean()
  })
}

const users = []
for (let i = 1; i < 15 ; i++) {
  users.push({
    'id': i,
    'username': `test${i}`,
    'password': 'public',
    'email': `test${i}@163.com`,
    'role': 'user',
    'remark': 'viewer',
    'created_at': faker.date.between('2017-01-02', '2017-02-20')
  })
}

const clients = []
for (let i = 1; i < 1001; i++) {
  clients.push({
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

const sessions = []
for (let i = 1; i < 1001; i++) {
  sessions.push({
    'client_id': `emqttd_${faker.random.number({min:10000000, max:20000000})}`,
    'clean_sess': faker.random.arrayElement(['true', 'false']),
    'max_inflight': 100,
    'inflight_queue': 0,
    'message_queue': 0,
    'message_dropped': faker.random.number({min:0, max:10}),
    'awaiting_rel': 0,
    'awaiting_ack': 0,
    'awaiting_comp': 0,
    'created_at': dateformat(faker.date.between('2017-01-02', '2017-02-20'), 'yyyy-mm-dd hh:MM:ss'),
  })
}

const topics = []
for (let i = 1; i < 1001; i++) {
  topics.push({
    'topic': `/test${i}`,
    'subTopicCount': faker.random.number({min:200, max:10000}),
  })
}

const routers = []
for (let i = 1; i < 1001; i++) {
  routers.push({
    'topic': `/test${i}`,
    'node': faker.random.arrayElement(['node1', 'node2', 'node3', 'node4']),
  })
}

const subscriptions = []
for (let i = 1; i < 1001; i++) {
  subscriptions.push({
    'client_id': `emqttd_${faker.random.number({min:10000000, max:20000000})}`,
    'topic': `/test${i}`,
    'qos': faker.random.arrayElement([0, 1, 2]),
  })
}

const alerts = { 'status': 'success', 'data': [] }
for (let i = 1; i < 2; i++) {
  alerts.data.push(
    {
      'labels': {
        'alertname': 'instance_down',
        'instance': 'emqx@192.168.10.1',
        'job': 'node-exporter',
        'monitor': 'emq-monitor',
        'severity': 'critical'
      },
      'annotations': {
        'summary': 'Instance emqx@192.168.1.2 down',
        'description': 'emqx@192.168.1.2 of job node-exporter has been down for more than 5 minutes.',
        'value': 'instance_down'
      },
      'startsAt': '2017-03-22T21:45:17.803+08:00',
    }, {
      'labels': {
        'alertname': 'too_many_clients',
        'instance': 'emqx@192.168.10.2',
        'job': 'node-exporter',
        'monitor': 'emq-monitor',
        'severity': 'major'
      },
      'annotations': {
        'summary': 'Instance emqx@192.168.1.2 down',
        'description': 'emqx@192.168.1.2 of job node-exporter has been down for more than 5 minutes.',
        'value': '240000'
      },
      'startsAt': '2017-03-22T22:45:17.803+08:00',
    }, {
      'labels': {
        'alertname': 'high_cpu_used',
        'instance': 'emqx@192.168.10.3',
        'job': 'node-exporter',
        'monitor': 'emq-monitor',
        'severity': 'minor'
      },
      'annotations': {
        'summary': 'Instance emqx@192.168.1.2 down',
        'description': 'emqx@192.168.1.2 of job node-exporter has been down for more than 5 minutes.',
        'value': '60%'
      },
      'startsAt': '2017-03-22T20:45:17.803+08:00',
    }, {
      'labels': {
        'alertname': 'high_mem_used',
        'instance': 'emqx@192.168.10.4',
        'job': 'node-exporter',
        'monitor': 'emq-monitor',
        'severity': 'warning'
      },
      'annotations': {
        'summary': 'Instance emqx@192.168.1.2 down',
        'description': 'emqx@192.168.1.2 of job node-exporter has been down for more than 5 minutes.',
        'value': '80%'
      },
      'startsAt': '2017-03-22T17:45:17.803+08:00',
    }
  )
}


module.exports = {
  users,
  plugins,
  clients,
  sessions,
  topics,
  routers,
  subscriptions,
  alerts,
}
