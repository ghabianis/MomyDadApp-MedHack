import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
