import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any[] = [
        {
            id: 1,
            name: 'john',
            phone: '098678'
        },
        {
            id: 2,
            name: 'johny',
            phone: '123098678'
        },
    ];

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto){

        this.users.push(user);

        return {
            ...user,
            id: this.users.length + 1,
        };
    }
    
}
