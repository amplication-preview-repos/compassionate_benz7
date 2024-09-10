export type GameRoom = {
  betAmount: number | null;
  createdAt: Date;
  id: string;
  roomName: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
