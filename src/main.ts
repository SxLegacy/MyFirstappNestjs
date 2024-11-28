import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //con esto si se envian campos que no corresponden, lo ignorará
  })); //asi todas las rutas tendrán validaciones si tienen un dto
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


//los servicios son logicas reutilizables
