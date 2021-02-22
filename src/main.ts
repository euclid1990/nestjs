import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const views = path.join(__dirname, '../views'); // Directory with *.njk templates

  nunjucks.configure(views, { express });

  app.setBaseViewsDir(views);
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();
