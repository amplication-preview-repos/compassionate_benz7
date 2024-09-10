import { SortOrder } from "../../util/SortOrder";

export type GameRoomOrderByInput = {
  betAmount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roomName?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
