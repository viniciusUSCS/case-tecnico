import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculoModule } from './modules/calculo.module';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const databaseConfig: TypeOrmModuleOptions = {
  "database" : "./db.sql",
  "type" : "sqlite",
  "synchronize" : true,
  "entities" : ["dist/**/*.model.js"]
}

@Module({
  imports: [CalculoModule, TypeOrmModule.forRoot(databaseConfig)],
})

export class AppModule {}

