import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "creator";

export const RoomTitle = (record: TRoom): string => {
  return record.creator?.toString() || String(record.id);
};
