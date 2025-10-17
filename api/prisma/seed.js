const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'prof@gmail.com',
      senha: 'senha123'
    }
  });
}

main()
  .then(() => {
    console.log('Seed executada com sucesso!');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });