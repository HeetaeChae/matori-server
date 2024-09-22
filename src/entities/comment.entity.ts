import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { MaxLength, MinLength } from 'class-validator';
import { Thumbsup } from './thumbsup.entity';

@Entity()
export class Comment extends CommonEntity {
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

  @OneToMany(() => Thumbsup, (thumbsup) => thumbsup.comment, {
    cascade: ['soft-remove'],
  })
  thumbsups: Thumbsup[];
}
