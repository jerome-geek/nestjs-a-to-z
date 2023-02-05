import {
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    // cats/
    @Get()
    getAllCat() {
        throw new HttpException('API is broken', 401);
        return 'all cat';
    }

    // cats/:id
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe) param: number) {
        console.log(
            '🚀 ~ file: cats.controller.ts:30 ~ CatsController ~ getOneCat ~ param',
            param,
        );
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete service';
    }
}
