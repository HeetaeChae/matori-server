import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity()
export class ThumbsupEntity extends CommonEntity {
  @PrimaryGeneratedColumn({ name: '추천 아이디' })
  id: number;
}
