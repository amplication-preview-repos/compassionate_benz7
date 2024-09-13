import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type GameCreateInput = {
  player1?: string | null;
  player2?: string | null;
  room?: RoomWhereUniqueInput | null;
  winner?: string | null;
};
