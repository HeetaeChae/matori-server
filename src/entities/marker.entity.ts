import { IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Shop } from './shop.entity';
import { Story } from './story.entity';

@Entity()
export class Marker extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '마커 아이디',
  })
  id: number;

  @Column({
    name: '위도',
  })
  @IsNumber()
  latitude: number;

  @Column({
    name: '경도',
  })
  @IsNumber()
  longitude: number;

  @OneToOne(() => Shop, (shop) => shop.marker)
  @JoinColumn({ name: 'shop_id' })
  shop: Shop;

  @OneToMany(() => Story, (story) => story.marker)
  stories: Story[];
}
