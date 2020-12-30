import { BaseEntity, Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task extends BaseEntity {

    @PrimaryColumn()
    @Generated('uuid') uuid: string;
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
} 