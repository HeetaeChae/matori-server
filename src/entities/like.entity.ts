import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Story } from './story.entity';

@Entity()
export class Like extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: '좋아요 아이디',
  })
  id: number;

  @ManyToOne(() => Story, (story) => story.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'story_id' })
  story: Story;
}
