import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Story } from './story.entity';
import { Follow } from './follow.entity';

@Entity()
export class User extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '유저 아이디',
  })
  id: number;

  @Column({
    name: '이메일',
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({
    name: '비밀번호',
  })
  @IsString()
  password: string;

  @Column({
    name: '닉네임',
    unique: true,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(6)
  nickname: string;

  @Column({ name: '자기소개', nullable: true })
  @MaxLength(100)
  intro: string;

  @Column({ name: '아바타', nullable: true })
  avatar: string;

  @OneToMany(() => Story, (story) => story.user, { cascade: ['soft-remove'] })
  stories: Story[];

  @OneToMany(() => Follow, (follow) => follow.following, {
    cascade: ['soft-remove'],
  })
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower, {
    cascade: ['soft-remove'],
  })
  followings: Follow[];
}
