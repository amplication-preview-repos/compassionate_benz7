import { GameRoom as TGameRoom } from "../api/gameRoom/GameRoom";

export const GAMEROOM_TITLE_FIELD = "roomName";

export const GameRoomTitle = (record: TGameRoom): string => {
  return record.roomName?.toString() || String(record.id);
};
