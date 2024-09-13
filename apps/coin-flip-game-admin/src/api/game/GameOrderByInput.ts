import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  player1?: SortOrder;
  player2?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
  winner?: SortOrder;
};
