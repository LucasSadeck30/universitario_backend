require('dotenv').config({ override: false });

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testar_conexao() {
    prisma.$connect().then(() => {
        console.log("Conexão realizada com sucesso");
    }).catch((err) => {
        console.log("Erro ao conectar:" + err)
    })
}

testar_conexao();

module.exports = prisma;