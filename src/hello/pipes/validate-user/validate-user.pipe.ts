import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform { //creando nuestro propio pipe
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);

    const ageNumber = parseInt(value.age.toString(),10);

    if (isNaN(ageNumber)){ //validacion para el pipe
      throw new HttpException('Age must be anumber', HttpStatus.BAD_REQUEST )
    }

    return {...value, age: ageNumber};
  }
}
