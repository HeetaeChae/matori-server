import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: '등록일자' })
  createdAt: Date;

  @UpdateDateColumn({ name: '수정일자' })
  updatedAt: Date;

  @DeleteDateColumn({ name: '삭제일자', nullable: true })
  deletedAt: Date | null;
}
