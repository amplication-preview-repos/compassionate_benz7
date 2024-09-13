import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameListRelationFilter } from "../game/GameListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoomWhereInput = {
  betAmount?: FloatNullableFilter;
  coinSide?: "Option1";
  creator?: StringNullableFilter;
  games?: GameListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
};
