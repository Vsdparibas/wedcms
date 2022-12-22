import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRank } from '../interfaces/user-rank.interface';
import { UserSex } from '../interfaces/user-sex.interface';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  figure: string;

  @Column({ name: 'pool_figure' })
  poolFigure: string;

  @Column({ length: 1 })
  sex: UserSex;

  @Column()
  motto: string;

  @Column()
  credits: number;

  @Column()
  tickets: number;

  @Column()
  film: number;

  @Column({ type: 'tinyint' })
  rank: UserRank;

  @Column({ name: 'console_motto' })
  consoleMotto: string;

  @Column({ name: 'receive_email' })
  receiveEmail: boolean;

  @Column()
  birthday: string;

  @Column()
  email: string;

  @Column({ name: 'last_online' })
  lastOnline: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'sso_ticket', nullable: true })
  ssoTicket: string | null;

  @Column({ name: 'club_subscribed' })
  clubSubscribed: number;

  @Column({ name: 'club_expiration' })
  clubExpiration: number;

  @Column({ name: 'club_gift_due' })
  clubGiftDue: number;

  @Column({ type: 'char', length: 3 })
  badge: string;

  @Column({ name: 'badge_active' })
  badgeActive: boolean;

  @Column({ name: 'allow_stalking' })
  allowStalking: boolean;

  @Column({ name: 'allow_friend_requests' })
  allowFriendRequests: boolean;

  @Column({ name: 'sound_enabled' })
  soundEnabled: boolean;

  @Column({ name: 'tutorial_finished' })
  tutorialFinished: boolean;

  @Column({ name: 'battleball_points' })
  battleballPoints: number;

  @Column({ name: 'snowstorm_points' })
  snowstormPoints: number;

  constructor(createUserDto: CreateUserDto) {
    if (!createUserDto) return;
    this.username = createUserDto.username;
    this.sex = createUserDto.sex;
    this.birthday = createUserDto.birthday;
    this.email = createUserDto.email;
    this.figure =
      this.sex === 'M'
        ? '1000118001270012900121001'
        : '1000118001270012900121001';
    this.poolFigure = '';
    this.motto = 'de kepler whey';
    this.credits = 200;
    this.tickets = 0;
    this.film = 0;
    this.rank = 1;
    this.consoleMotto = 'Im a new user!';
    this.receiveEmail = false;
    this.lastOnline = 0;
    const actualDate = new Date(Date.now());
    this.createdAt = actualDate;
    this.updatedAt = actualDate;
    this.ssoTicket = null;
    this.clubSubscribed = 0;
    this.clubExpiration = 0;
    this.clubGiftDue = 0;
    this.badge = '';
    this.badgeActive = true;
    this.allowStalking = true;
    this.allowFriendRequests = true;
    this.soundEnabled = true;
    this.tutorialFinished = false;
    this.battleballPoints = 0;
    this.snowstormPoints = 0;
  }
}
