require('dotenv').config();
const { Pool } = require('pg');

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('Tipo da senha:', typeof process.env.DATABASE_URL);

// Teste 1: Pool com URL
const pool1 = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool1.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Erro com connectionString:', err.message);
    } else {
        console.log('Sucesso com connectionString!', res.rows[0]);
    }
    pool1.end();
});

// Teste 2: Pool com parâmetros separados
const pool2 = new Pool({
    user: 'lucas',
    host: 'localhost',
    database: 'faculdade',
    password: '123',
    port: 5432,
});

pool2.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Erro com parâmetros:', err.message);
    } else {
        console.log('Sucesso com parâmetros!', res.rows[0]);
    }
    pool2.end();
});