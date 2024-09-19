import { IsString, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity()
export class StoryEntity extends CommonEntity {
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
}
