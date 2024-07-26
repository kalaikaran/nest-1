import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeService: CoffeeService) {}
  @Get()
  findAll() {
    console.log('get all coffes');
    return 'Getting all params';
  }

  @Get(':id')
  findUnique(@Param('id') id: string) {
    console.log(id);
    // return `these are the passed params ${JSON.stringify(params)}`
    return `these are the passed params ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.FOUND)
  sendData(@Body() body) {
    return body;
  }
}
