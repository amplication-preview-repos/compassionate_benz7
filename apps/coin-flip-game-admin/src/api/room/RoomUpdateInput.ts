import { GameUpdateManyWithoutRoomsInput } from "./GameUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  betAmount?: number | null;
  coinSide?: "Option1" | null;
  creator?: string | null;
  games?: GameUpdateManyWithoutRoomsInput;
  status?: "Option1" | null;
};
