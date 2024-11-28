import { Body, Controller, Get,  Post, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {

    constructor (private usersService: UsersService) {}
    
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post() 
    // @UsePipes(new ValidationPipe()) >>> es mejor usar globalpipes en el documento main
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }      

    // @Patch() 
    // createUserStatus() {
    //     return this.usersService.updateUsersStatus();
    // }     

    // @Put() 
    // updateUser(@Body() user: UpdateuserDto) {
    //     return this.usersService.updateUsers(user);
    // }      

    // @Delete() 
    // deleteUser() {
    //     return this.usersService.deleteUsers();
    // }      
}
