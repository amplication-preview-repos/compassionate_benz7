import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SymbolModelService } from "./symbolModel.service";
import { SymbolModelControllerBase } from "./base/symbolModel.controller.base";

@swagger.ApiTags("symbolModels")
@common.Controller("symbolModels")
export class SymbolModelController extends SymbolModelControllerBase {
  constructor(protected readonly service: SymbolModelService) {
    super(service);
  }
}
