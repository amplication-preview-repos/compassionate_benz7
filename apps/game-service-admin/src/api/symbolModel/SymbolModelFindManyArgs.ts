import { SymbolModelWhereInput } from "./SymbolModelWhereInput";
import { SymbolModelOrderByInput } from "./SymbolModelOrderByInput";

export type SymbolModelFindManyArgs = {
  where?: SymbolModelWhereInput;
  orderBy?: Array<SymbolModelOrderByInput>;
  skip?: number;
  take?: number;
};
