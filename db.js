const { dbClient } = require('pg');
require('dotenv').config();

const dbclient = new dbClient({
  user: 'postgres',
  host: process.env.MACHINE_IP,
  database: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  port: 5433
});

dbclient.connect()
  .then(() => console.log('Successfully connected to the bot database!'))
  .catch(err => console.error('Connection error', err.stack));