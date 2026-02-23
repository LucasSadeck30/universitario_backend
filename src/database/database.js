require('dotenv').config({ override: false });

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'dpg-d6e6a494tr6s73d96qk0-a.oregon-postgres.render.com',
    port: 5432,
    database: 'faculdade_8y9e',
    user: 'lucas',
    password: 'Mcwv4fQ6CZy1WkHx4xTukmneR56XvwOP',
    ssl: { rejectUnauthorized: false }
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

module.exports = prisma;