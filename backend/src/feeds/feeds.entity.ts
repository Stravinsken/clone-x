import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('feeds')
export class Feed {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('text')
  content: string;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

}