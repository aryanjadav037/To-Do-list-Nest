/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post('signup')
  async signup(@Body() body: { username: string; password: string }) {
    return this.usersService.create(body.username, body.password);
  }
}
