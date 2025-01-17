import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()


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



