import { NestFactory } from '@nestjs/core';
import * as cookieParser from "cookie-parser";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

//main-file