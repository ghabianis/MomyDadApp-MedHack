/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, User } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return await this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<PaginatedInterface<User>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.user.findMany(args),
      this.prisma.user.count({ where: { deletedAt: null } }),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return await this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return await this.prisma.user.create<T>(args);
  }

  async createMany<T extends Prisma.UserCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.user.createMany<T>(args);
  }

  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return await this.prisma.user.update<T>(args);
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return await this.prisma.user.delete(args);
  }
  async updateMany<T extends Prisma.UserUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.user.updateMany(args);
  }
}
