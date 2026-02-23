require('dotenv').config({ override: false });

console.log("DATABASE_URL:", process.env.DATABASE_URL); 

const {PrismaClient} = require('@prisma/client');
const { PrismaPg} = require('@prisma/adapter-pg')
const { Pool } = require('pg');

// Usar connectionString que já está funcionando!
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter: adapter
});

async function testar_conexao() {
    prisma.$connect().then(()=>{
        console.log("Conexão realizada com sucesso");
    }).catch((err)=>{
        console.log("Erro ao conectar com o banco de dados da faculdade:" + err)
    })
}

testar_conexao();

module.exports = prisma;