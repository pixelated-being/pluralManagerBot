const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: 'postgres',
  host: process.env.MACHINE_IP,
  database: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  port: 5433
});

client.connect()
  .then(() => console.log('Successfully connected to the bot database!'))
  .catch(err => console.error('Connection error', err.stack));