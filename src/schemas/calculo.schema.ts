import { IsNumber, Min} from 'class-validator';

export class CalculoSchema {  
    @IsNumber()
    @Min(1)
    potenciaTotal: number;
    @IsNumber()
    @Min(1)
    potenciaPainel: number;
    @IsNumber()
    @Min(1)
    comprimento: number;
    @IsNumber()
    @Min(1)
    altura:number;
}