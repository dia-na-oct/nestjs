import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  dinfOne(@Param('id') id: string){
    return this.usersService.findOne(+id);
  } 

  @Post()
  create(@Body() body:any){
    return this.usersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string ,@Body() body:any){
    return this.usersService.update(+id,body);

  }
  @Delete(':id')
  remove(@Param('id') id: string ){
    return this.usersService.remove(+id);

  }
  // Other HTTP endpoints for user-related operations
}
