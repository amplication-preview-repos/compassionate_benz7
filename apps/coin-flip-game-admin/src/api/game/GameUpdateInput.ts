import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type GameUpdateInput = {
  player1?: string | null;
  player2?: string | null;
  room?: RoomWhereUniqueInput | null;
  winner?: string | null;
};
