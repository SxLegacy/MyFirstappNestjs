import { IsString, MinLength } from 'class-validator'


export class CreateTaskDto {
    @IsString () //ojo con esto lo defino pero aun no lo valido, eso se hace en controlador
    @MinLength (4)
    title?: string
    @IsString ()
    @MinLength (4)
    description?: string
}