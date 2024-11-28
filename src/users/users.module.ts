import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(//'users' //esto es un middleware que hace que todos los users pasen por aqui
      {
        path: '/users', method: RequestMethod.GET
      },
      {
        path: '/users', 
        method: RequestMethod.POST
      },
    )
    .apply(AuthMiddleware)//al colocar el punto estamos llamando al otro middleware despues del primero, ya ocurrio uno entonces ocurre este
    .forRoutes('users');//y esta es la condicional
  }
}
