import * as graphql from "@nestjs/graphql";
import { SymbolModelResolverBase } from "./base/symbolModel.resolver.base";
import { SymbolModel } from "./base/SymbolModel";
import { SymbolModelService } from "./symbolModel.service";

@graphql.Resolver(() => SymbolModel)
export class SymbolModelResolver extends SymbolModelResolverBase {
  constructor(protected readonly service: SymbolModelService) {
    super(service);
  }
}
