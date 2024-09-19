import { IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity()
export class MarkerEntity extends CommonEntity {
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
}
