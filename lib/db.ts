import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// 避免开发过程中因热重载导致 prisma client 出现重复创建的问题
export const db = globalThis.prisma || new PrismaClient();

// 开发环境中，将 db 保存在 node 全局变量中
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// export const db = new PrismaClient();
