import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BetWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
};
