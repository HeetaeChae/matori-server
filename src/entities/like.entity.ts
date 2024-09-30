import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Story, User } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Like extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '좋아요 아이디',
  })
  id: number;

  @ManyToOne(() => Story, (story) => story.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
