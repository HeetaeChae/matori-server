import { IsNumber } from 'class-validator';

export class HandleLikeDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  storyId: number;
}
