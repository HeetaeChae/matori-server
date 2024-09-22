import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Comment } from './comment.entity';

@Entity()
export class Thumbsup extends CommonEntity {
  @PrimaryGeneratedColumn({ name: '추천 아이디' })
  id: number;

  @ManyToOne(() => Comment, (comment) => comment.thumbsups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'comment_id' })
  comment: Comment;
}
