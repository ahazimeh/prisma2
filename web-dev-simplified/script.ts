import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({ data: { name: "Sally" } });
  //   console.log(user);
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    // it will not matter because it will automatically disconnect
    await prisma.$disconnect();
  });
