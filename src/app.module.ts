/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './Todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app'),
    UserModule,
    AuthModule,
    TodosModule,
  ],
})
export class AppModule {}
