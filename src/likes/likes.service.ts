import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Like } from 'src/entities/_index.entity';
import { HandleLikeDto } from './dto/_index';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) private readonly likeRepository: Repository<Like>,
  ) {}

  // Like (좋아요) 여부 읽기
  async getLike(userId: number, storyId: number): Promise<Like | null> {
    return await this.likeRepository.findOne({
      where: { user: { id: userId }, story: { id: storyId } },
    });
  }

  // Like (좋아요) 등록
  async addLike(userId: number, storyId: number): Promise<void> {
    const newLike = this.likeRepository.create({
      user: { id: userId },
      story: { id: storyId },
    });
    await this.likeRepository.save(newLike);
  }

  // Like (좋아요) 삭제
  async unLike(likeId: number): Promise<void> {
    await this.likeRepository.delete(likeId);
  }

  // Like (좋아요) 처리
  async handleLike(handleLikeDto: HandleLikeDto): Promise<void> {
    const { userId, storyId } = handleLikeDto;
    const existingLike = await this.getLike(userId, storyId);

    if (existingLike) {
      await this.unLike(existingLike.id);
    } else {
      await this.addLike(userId, storyId);
    }
  }
}
