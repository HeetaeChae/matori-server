import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CommonEntity {
  @CreateDateColumn({ comment: '등록일자', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '수정일자', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '삭제일자', name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}
