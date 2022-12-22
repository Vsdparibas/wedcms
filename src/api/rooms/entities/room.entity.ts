import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'owner_id' })
  ownerId: string;

  @Column({ nullable: true })
  categoryId: number | null;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  model: string;

  @Column({ nullable: true })
  ccts: string | null;

  @Column({ nullable: true })
  wallpaper: number | null;

  @Column({ nullable: true })
  floor: number | null;

  @Column({ name: 'showname', nullable: true })
  showName: boolean | null;

  @Column({ name: 'superusers', nullable: true })
  superUsers: boolean | null;

  @Column({ name: 'accesstype', nullable: true })
  accessType: number | null;

  @Column({ nullable: true })
  password: string | null;

  @Column({ name: 'visitors_now', nullable: true })
  visitorsNow: number | null;

  @Column({ name: 'visitors_max', nullable: true })
  visitorsMax: number | null;

  @Column()
  rating: number;

  @Column({ name: 'is_hidden' })
  isHidden: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
