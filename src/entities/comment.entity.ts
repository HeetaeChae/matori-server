import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Thumbsup, User } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Comment extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '댓글 아이디',
  })
  id: number;

  @Column({
    comment: '댓글 내용',
  })
  content: string;

  @OneToMany(() => Thumbsup, (thumbsup) => thumbsup.comment, {
    cascade: ['soft-remove'],
  })
  thumbsups: Thumbsup[];

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
