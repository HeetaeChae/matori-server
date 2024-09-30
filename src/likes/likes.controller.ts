import { Body, Controller } from '@nestjs/common';

import { HandleLikeDto } from './dto/_index';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  async handleLike(@Body() handleLikeDto: HandleLikeDto) {
    return this.likesService.handleLike(handleLikeDto);
  }
}
