import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Shop, Marker, User, Like } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Story extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '스토리 아이디',
  })
  id: number;

  @Column({
    comment: '내용',
  })
  content: string;

  @OneToMany(() => Like, (like) => like.story, { cascade: ['soft-remove'] })
  likes: Like[];

  @ManyToOne(() => Shop, (shop) => shop.stories)
  @JoinColumn({ name: 'shop_id' })
  shop: Shop;

  @ManyToOne(() => Marker, (marker) => marker.stories)
  @JoinColumn({ name: 'marker_id' })
  marker: Marker;

  @ManyToOne(() => User, (user) => user.stories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
