import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import VotesPerHour from "./VotesPerHour";

@Entity("elimination")
class Brother {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("integer")
  votes: number;

  @Column("json")
  votesPerHour: VotesPerHour[];
}

export default Brother;
