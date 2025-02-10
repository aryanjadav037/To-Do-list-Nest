/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  try {
    await app.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (error) {
    console.error('Error starting server', error);
  }
}
bootstrap();
