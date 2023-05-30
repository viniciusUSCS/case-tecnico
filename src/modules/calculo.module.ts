import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { CalculoController } from 'src/controllers/calculo.controller';
import { CalculoModel } from "src/models/calculo.model";

@Module ({
    imports: [TypeOrmModule.forFeature([CalculoModel])],
    controllers: [CalculoController],
})
export class CalculoModule {}
