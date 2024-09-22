import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { User } from './user.entity';

export class Follow extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.followers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'follower_id' })
  follower: User;

  @ManyToOne(() => User, (user) => user.followings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'following_id' })
  following: User;
}
