import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  betAmount?: SortOrder;
  coinSide?: SortOrder;
  createdAt?: SortOrder;
  creator?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
