import { Game } from "../game/Game";

export type Room = {
  betAmount: number | null;
  coinSide?: "Option1" | null;
  createdAt: Date;
  creator: string | null;
  games?: Array<Game>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
