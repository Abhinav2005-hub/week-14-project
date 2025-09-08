import { PrismaClient } from "@/app/generated/prisma";

console.log("inside db.ts");

const prismaClientSingleton = () => {
  console.log("prisma client instantiated")
  return new PrismaClient();
};

declare global {
  var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
