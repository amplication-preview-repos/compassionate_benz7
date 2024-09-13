import { Room } from "../room/Room";

export type Game = {
  createdAt: Date;
  id: string;
  player1: string | null;
  player2: string | null;
  room?: Room | null;
  updatedAt: Date;
  winner: string | null;
};
