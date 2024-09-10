import { Module } from "@nestjs/common";
import { GameRoomModuleBase } from "./base/gameRoom.module.base";
import { GameRoomService } from "./gameRoom.service";
import { GameRoomController } from "./gameRoom.controller";
import { GameRoomResolver } from "./gameRoom.resolver";

@Module({
  imports: [GameRoomModuleBase],
  controllers: [GameRoomController],
  providers: [GameRoomService, GameRoomResolver],
  exports: [GameRoomService],
})
export class GameRoomModule {}
