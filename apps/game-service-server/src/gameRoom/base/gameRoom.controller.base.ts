/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GameRoomService } from "../gameRoom.service";
import { GameRoomCreateInput } from "./GameRoomCreateInput";
import { GameRoom } from "./GameRoom";
import { GameRoomFindManyArgs } from "./GameRoomFindManyArgs";
import { GameRoomWhereUniqueInput } from "./GameRoomWhereUniqueInput";
import { GameRoomUpdateInput } from "./GameRoomUpdateInput";

export class GameRoomControllerBase {
  constructor(protected readonly service: GameRoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameRoom })
  async createGameRoom(
    @common.Body() data: GameRoomCreateInput
  ): Promise<GameRoom> {
    return await this.service.createGameRoom({
      data: data,
      select: {
        betAmount: true,
        createdAt: true,
        id: true,
        roomName: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameRoom] })
  @ApiNestedQuery(GameRoomFindManyArgs)
  async gameRooms(@common.Req() request: Request): Promise<GameRoom[]> {
    const args = plainToClass(GameRoomFindManyArgs, request.query);
    return this.service.gameRooms({
      ...args,
      select: {
        betAmount: true,
        createdAt: true,
        id: true,
        roomName: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gameRoom(
    @common.Param() params: GameRoomWhereUniqueInput
  ): Promise<GameRoom | null> {
    const result = await this.service.gameRoom({
      where: params,
      select: {
        betAmount: true,
        createdAt: true,
        id: true,
        roomName: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGameRoom(
    @common.Param() params: GameRoomWhereUniqueInput,
    @common.Body() data: GameRoomUpdateInput
  ): Promise<GameRoom | null> {
    try {
      return await this.service.updateGameRoom({
        where: params,
        data: data,
        select: {
          betAmount: true,
          createdAt: true,
          id: true,
          roomName: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGameRoom(
    @common.Param() params: GameRoomWhereUniqueInput
  ): Promise<GameRoom | null> {
    try {
      return await this.service.deleteGameRoom({
        where: params,
        select: {
          betAmount: true,
          createdAt: true,
          id: true,
          roomName: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
