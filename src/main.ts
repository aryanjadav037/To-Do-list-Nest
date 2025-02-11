/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Todos API')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('todos')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  try {
    await app.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (error) {
    console.error('Error starting server', error);
  }
}
bootstrap();
