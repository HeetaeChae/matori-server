import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShopEntity {
  @PrimaryGeneratedColumn({
    name: '가게 아이디',
  })
  id: number;

  @Column({
    name: '이름',
  })
  @IsString()
  name: string;

  @Column({
    name: '주소',
  })
  @IsString()
  address: string;

  @Column({
    name: '평점',
  })
  @IsNumber()
  rating: number;

  @Column({
    name: '포장여부',
  })
  @IsBoolean()
  takeout: boolean;

  @Column({
    name: '배달여부',
  })
  @IsBoolean()
  delivery: boolean;

  @Column({
    name: '매장식사여부',
  })
  dineIn: boolean;

  @Column({
    name: '애견동반여부',
  })
  allowDog: boolean;

  @Column({
    name: '예약여부',
  })
  reservable: boolean;
}
