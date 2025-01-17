// import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient()


// import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
//     return new PrismaClient();
// };

// declare const globalThis: {
//     prisma: ReturnType<typeof prismaClientSingleton>;
//     prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;

// }  & typeof global;

// export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();



// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma


import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
