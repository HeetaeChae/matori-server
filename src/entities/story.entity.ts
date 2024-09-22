import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Shop } from './shop.entity';
import { Marker } from './marker.entity';
import { User } from './user.entity';
import { Like } from './like.entity';

@Entity()
export class Story extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '스토리 아이디',
  })
  id: number;

  @Column({
    name: '내용',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(300)
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
