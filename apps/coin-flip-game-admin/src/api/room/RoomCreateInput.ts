import { GameCreateNestedManyWithoutRoomsInput } from "./GameCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  betAmount?: number | null;
  coinSide?: "Option1" | null;
  creator?: string | null;
  games?: GameCreateNestedManyWithoutRoomsInput;
  status?: "Option1" | null;
};
