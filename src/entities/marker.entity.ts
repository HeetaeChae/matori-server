import { IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Shop, Story } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Marker extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '마커 아이디',
  })
  id: number;

  @Column({
    comment: '위도',
  })
  latitude: number;

  @Column({
    comment: '경도',
  })
  longitude: number;

  @OneToOne(() => Shop, (shop) => shop.marker)
  @JoinColumn({ name: 'shop_id' })
  shop: Shop;

  @OneToMany(() => Story, (story) => story.marker)
  stories: Story[];
}
