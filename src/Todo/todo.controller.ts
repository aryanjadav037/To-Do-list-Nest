/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Body, Param, Request, Query } from '@nestjs/common';
import { TodosService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Request() req, @Body() body: { title: string; status: boolean }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.todosService.create(body.title, body.status, req.user.userId);
  }

  @Get()
  async findAll(@Request() req ,@Query('page') page: number, @Query('limit') limit: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const todos = await this.todosService.findAll(req.user.userId ,page ,limit);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return todos;
  }

  @Get()
  async findWithTitle(@Request() req, @Query('title') title: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.todosService.findewithtitle(title, req.user.userId);
  }

  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.todosService.delete(id, req.user.userId);
  }
}
