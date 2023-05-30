import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CalculoModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    potenciaTotal: number;

    @Column('float')
    potenciaPainel: number;

    @Column('float')
    comprimento: number;

    @Column('float')
    largura:number;
}