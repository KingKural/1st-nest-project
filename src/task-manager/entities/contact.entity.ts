import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    
    @PrimaryGeneratedColumn()
    private id:number;
    
    @Column()
    private name:string;

    
    

}