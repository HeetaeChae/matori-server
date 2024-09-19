import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity()
export class LikeEntity extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '좋아요 아이디',
  })
  id: number;
}
