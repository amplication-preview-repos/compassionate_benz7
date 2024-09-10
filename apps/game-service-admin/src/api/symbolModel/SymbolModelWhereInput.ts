import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SymbolModelWhereInput = {
  id?: StringFilter;
  symbolName?: StringNullableFilter;
};
