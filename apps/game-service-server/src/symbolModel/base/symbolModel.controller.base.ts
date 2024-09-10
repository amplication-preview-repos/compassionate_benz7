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
import { SymbolModelService } from "../symbolModel.service";
import { SymbolModelCreateInput } from "./SymbolModelCreateInput";
import { SymbolModel } from "./SymbolModel";
import { SymbolModelFindManyArgs } from "./SymbolModelFindManyArgs";
import { SymbolModelWhereUniqueInput } from "./SymbolModelWhereUniqueInput";
import { SymbolModelUpdateInput } from "./SymbolModelUpdateInput";

export class SymbolModelControllerBase {
  constructor(protected readonly service: SymbolModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SymbolModel })
  async createSymbolModel(
    @common.Body() data: SymbolModelCreateInput
  ): Promise<SymbolModel> {
    return await this.service.createSymbolModel({
      data: data,
      select: {
        createdAt: true,
        id: true,
        symbolName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SymbolModel] })
  @ApiNestedQuery(SymbolModelFindManyArgs)
  async symbolModels(@common.Req() request: Request): Promise<SymbolModel[]> {
    const args = plainToClass(SymbolModelFindManyArgs, request.query);
    return this.service.symbolModels({
      ...args,
      select: {
        createdAt: true,
        id: true,
        symbolName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SymbolModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async symbolModel(
    @common.Param() params: SymbolModelWhereUniqueInput
  ): Promise<SymbolModel | null> {
    const result = await this.service.symbolModel({
      where: params,
      select: {
        createdAt: true,
        id: true,
        symbolName: true,
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
  @swagger.ApiOkResponse({ type: SymbolModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSymbolModel(
    @common.Param() params: SymbolModelWhereUniqueInput,
    @common.Body() data: SymbolModelUpdateInput
  ): Promise<SymbolModel | null> {
    try {
      return await this.service.updateSymbolModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          symbolName: true,
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
  @swagger.ApiOkResponse({ type: SymbolModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSymbolModel(
    @common.Param() params: SymbolModelWhereUniqueInput
  ): Promise<SymbolModel | null> {
    try {
      return await this.service.deleteSymbolModel({
        where: params,
        select: {
          createdAt: true,
          id: true,
          symbolName: true,
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