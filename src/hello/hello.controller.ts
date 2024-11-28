import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {//estamos practicando la api (sintaxis) de express
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World'
        })
    }

    @Get('notfound')
    @HttpCode(404) //para manipular el code del respuesta de http
    notFoundpage() {
        return '404 not found'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
    return num + 14;
    }
    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status:boolean) {
        console.log(typeof status)
        return status;
    }


    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
        console.log(typeof query.age)
        console.log(typeof query.name)
        return `Hello ${query.name}, you are ${query.age} years old`
    }
}


