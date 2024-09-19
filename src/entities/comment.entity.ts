import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { MaxLength, MinLength } from 'class-validator';

@Entity()
export class CommentEntity extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '댓글 아이디',
  })
  id: number;

  @Column({
    name: '댓글 내용',
  })
  @MinLength(1)
  @MaxLength(30)
  content: string;
}
