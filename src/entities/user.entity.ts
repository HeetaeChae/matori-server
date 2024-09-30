import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';

import { Story, Follow, Like, Comment } from './_index.entity';

@Entity()
export class User extends CommonEntity {
  @PrimaryGeneratedColumn({
    comment: '유저 아이디',
  })
  id: number;

  @Column({
    comment: '이메일',
    unique: true,
  })
  email: string;

  @Column({
    comment: '비밀번호',
  })
  password: string;

  @Column({
    comment: '닉네임',
    unique: true,
  })
  nickname: string;

  @Column({ comment: '자기소개', nullable: true })
  intro: string;

  @Column({ comment: '아바타', nullable: true })
  avatar: string;

  @OneToMany(() => Story, (story) => story.user, { cascade: ['soft-remove'] })
  stories: Story[];

  @OneToMany(() => Like, (like) => like.user, { cascade: ['soft-remove'] })
  likes: Like[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    cascade: ['soft-remove'],
  })
  comments: Comment[];

  @OneToMany(() => Follow, (follow) => follow.following, {
    cascade: ['soft-remove'],
  })
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower, {
    cascade: ['soft-remove'],
  })
  followings: Follow[];
}
