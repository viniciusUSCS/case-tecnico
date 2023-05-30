import { Controller, Delete, Get, Post, Put, Body, Param, NotFoundException } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common/pipes";
import { InjectRepository } from "@nestjs/typeorm/dist";
import { CalculoModel } from "src/models/calculo.model";
import { CalculoSchema } from "src/schemas/calculo.schema";
import { Repository } from "typeorm";
import { ParseIntPipe } from "@nestjs/common/pipes";


@Controller('/calculo')
export class CalculoController {
    constructor (@InjectRepository(CalculoModel) private model: Repository<CalculoModel>) {}

    @Post()
    public async create( @Body() body: CalculoSchema): Promise<{data: CalculoModel}> {
        const calculoCreated = await this.model.save(body);
        return { data: calculoCreated };
    }

    @Get(':id')
    public async getOne(@Param('id', ParseIntPipe )id: number): Promise <{ data: CalculoModel }> {
        const calculo = await this.model.findOne({ where: { id } });
        
        if (!calculo) {
            throw new NotFoundException(`Nao achei uma calculo com o id ${id}`)
        }

        return { data: calculo };
    }

    @Get()
    public async getAll(): Promise<{ data: CalculoModel[] }> {
        const list = await this.model.find();
        return { data: list};
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() body: CalculoSchema): Promise<{ data: CalculoModel }> {
        const calculo = await this.model.findOne ({ where: { id }});

        if ( !calculo ) {
            throw new NotFoundException( `Nao achei um calculo com o id ${id}` )
        }

        await this.model.update({id}, body);

        return { data: await this.model.findOne ({ where: { id } }) };
    }

    @Delete(':id')
    public async delete (@Param('id', ParseIntPipe) id: number): Promise<{data : string}> {
        const calculo = await this.model.findOne ({ where: { id } });

        if ( !calculo ) {
            throw new NotFoundException( `Nao achei um calculo com o id ${id}` )
        }

        await this.model.delete(id);

        return {data: `O calculo com id ${id} foi deletado com sucesso` }   
    }
    }

