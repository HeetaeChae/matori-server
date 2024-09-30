import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Follow extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '팔로우 아이디',
  })
  id: number;

  @ManyToOne(() => User, (user) => user.followers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'follower_id' })
  following: User;

  @ManyToOne(() => User, (user) => user.followings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'following_id' })
  follower: User;
}
