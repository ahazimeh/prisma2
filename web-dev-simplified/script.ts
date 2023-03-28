import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  //   const user = await prisma.user.create({ data: { name: "Sally" } });
  //   console.log(user);
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Kyle",
  //     email: "Kyle@test.com",
  //     age: 27,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include: {
  //   //   userPreference: true,
  //   // },
  //   select: {
  //     name: true,
  //     userPreference: {
  //       select: {
  //         id: true,
  //       },
  //     },
  //   },
  // });
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Kyle",
        email: "Kyle@test.com",
        age: 27,
      },
      {
        name: "Sally",
        email: "sally@test.com",
        age: 32,
      },
    ],
  });
  console.log(users);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    // it will not matter because it will automatically disconnect
    await prisma.$disconnect();
  });
