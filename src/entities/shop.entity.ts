import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Marker, Story } from './_index.entity';
import { CommonEntity } from './common.entity';

@Entity()
export class Shop extends CommonEntity {
  @PrimaryGeneratedColumn({ comment: '가게 아이디' })
  id: number;

  @Column({ comment: '장소 아이디', name: 'place_id' })
  placeId: string;

  @Column({ comment: '이름' })
  name: string;

  @Column({ comment: '주소' })
  address: string;

  @Column({ comment: '전화번호' })
  contact: string;

  @Column({ comment: '카테고리' })
  category: string;

  @Column({ comment: '평점' })
  rating: number;

  @Column({ comment: '평점 개수', name: 'rating_count' })
  ratingCount: number;

  @Column({ comment: '영업 시간', name: 'opening_hours' })
  openingHours: string;

  @Column({ comment: '영업 여부' })
  opening: boolean;

  @Column({ comment: '포장' })
  takeout: boolean;

  @Column({ comment: '배달' })
  delivery: boolean;

  @Column({ comment: '매장식사', name: 'dine_in' })
  dineIn: boolean;

  @Column({ comment: '애견동반', name: 'allow_dog' })
  allowDog: boolean;

  @Column({ comment: '예약' })
  reservable: boolean;

  @Column({ comment: '주차' })
  parking: boolean;

  @OneToOne(() => Marker, (marker) => marker.shop)
  marker: Marker;

  @OneToMany(() => Story, (story) => story.shop)
  stories: Story[];
}
