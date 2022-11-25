import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { PersonDto } from "./dtos/person.dto";
import { Person } from "./person.entity";
import { PersonsService } from "./person.service";

@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService) { }
    @Get()
    getAll(@Query('name') searchName: string): Array<Person> {
        return this.personsService.getAll(searchName);
    }

    @Post()
    create(@Body() createPersonDto: PersonDto): Person {
        console.log(createPersonDto);
        return this.personsService.add(createPersonDto.name, createPersonDto.phone);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatePersonDto: PersonDto): Person {
        return this.personsService.update(id,updatePersonDto.name, updatePersonDto.phone)
    }

    @Get(':id')
    getOne(@Param('id') id: number): Person {
        return this.personsService.get(id);

    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.personsService.remove(id);
    }

    
}