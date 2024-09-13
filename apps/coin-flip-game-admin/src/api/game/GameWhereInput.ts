import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type GameWhereInput = {
  id?: StringFilter;
  player1?: StringNullableFilter;
  player2?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
  winner?: StringNullableFilter;
};
