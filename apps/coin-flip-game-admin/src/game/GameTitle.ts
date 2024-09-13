import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "player1";

export const GameTitle = (record: TGame): string => {
  return record.player1?.toString() || String(record.id);
};
