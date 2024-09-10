import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameRoomWhereInput = {
  betAmount?: IntNullableFilter;
  id?: StringFilter;
  roomName?: StringNullableFilter;
  status?: "Option1";
};
