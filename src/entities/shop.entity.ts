import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Marker } from './marker.entity';
import { Story } from './story.entity';

@Entity()
export class Shop extends CommonEntity {
  @PrimaryGeneratedColumn({ name: '가게 아이디' })
  id: number;

  @Column({ name: '장소 아이디' })
  placeId: string;

  @Column({ name: '이름' })
  name: string;

  @Column({ name: '주소' })
  address: string;

  @Column({ name: '전화번호' })
  contact: string;

  @Column({ name: '카테고리' })
  category: string;

  @Column({ name: '평점' })
  rating: number;

  @Column({ name: '평점 개수' })
  ratingCount: number;

  @Column({ name: '영업 시간' })
  openingHours: string[];

  @Column({ name: '영업 여부' })
  opening: boolean;

  @Column({ name: '포장' })
  takeout: boolean;

  @Column({ name: '배달' })
  delivery: boolean;

  @Column({ name: '매장식사' })
  dineIn: boolean;

  @Column({ name: '애견동반' })
  allowDog: boolean;

  @Column({ name: '예약' })
  reservable: boolean;

  @Column({ name: '주차' })
  parking: boolean;

  @OneToOne(() => Marker, (marker) => marker.shop)
  marker: Marker;

  @OneToMany(() => Story, (story) => story.shop)
  stories: Story[];
}
