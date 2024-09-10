import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
