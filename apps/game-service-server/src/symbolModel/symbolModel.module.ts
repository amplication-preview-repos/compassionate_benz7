import { Module } from "@nestjs/common";
import { SymbolModelModuleBase } from "./base/symbolModel.module.base";
import { SymbolModelService } from "./symbolModel.service";
import { SymbolModelController } from "./symbolModel.controller";
import { SymbolModelResolver } from "./symbolModel.resolver";

@Module({
  imports: [SymbolModelModuleBase],
  controllers: [SymbolModelController],
  providers: [SymbolModelService, SymbolModelResolver],
  exports: [SymbolModelService],
})
export class SymbolModelModule {}
