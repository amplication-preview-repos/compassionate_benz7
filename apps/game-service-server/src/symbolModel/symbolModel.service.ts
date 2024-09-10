import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SymbolModelServiceBase } from "./base/symbolModel.service.base";

@Injectable()
export class SymbolModelService extends SymbolModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
