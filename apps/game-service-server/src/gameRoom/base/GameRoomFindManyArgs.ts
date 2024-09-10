/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameRoomWhereInput } from "./GameRoomWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameRoomOrderByInput } from "./GameRoomOrderByInput";

@ArgsType()
class GameRoomFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameRoomWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameRoomWhereInput, { nullable: true })
  @Type(() => GameRoomWhereInput)
  where?: GameRoomWhereInput;

  @ApiProperty({
    required: false,
    type: [GameRoomOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameRoomOrderByInput], { nullable: true })
  @Type(() => GameRoomOrderByInput)
  orderBy?: Array<GameRoomOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GameRoomFindManyArgs as GameRoomFindManyArgs };