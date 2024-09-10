import * as graphql from "@nestjs/graphql";
import { GameRoomResolverBase } from "./base/gameRoom.resolver.base";
import { GameRoom } from "./base/GameRoom";
import { GameRoomService } from "./gameRoom.service";

@graphql.Resolver(() => GameRoom)
export class GameRoomResolver extends GameRoomResolverBase {
  constructor(protected readonly service: GameRoomService) {
    super(service);
  }
}
