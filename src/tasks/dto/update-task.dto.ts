import { IsString } from 'class-validator'

export class UpdateTaskDto {
    @IsString () //ojo con esto lo defino pero aun no lo valido, eso se hace en controlador
    title?: string
    @IsString ()
    description?: string
}