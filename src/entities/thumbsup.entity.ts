import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Comment } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Thumbsup extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '추천 아이디' })
  id: number;

  @ManyToOne(() => Comment, (comment) => comment.thumbsups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'comment_id' })
  comment: Comment;
}
