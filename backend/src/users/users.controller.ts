import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Post('login')
    login(@Body() loginDto: {email: string; password: string}){
        return this.usersService.login(loginDto);
    }

    @Post()
    createUser(@Body() user: { name: string; email: string; password: string }) {
        return this.usersService.createUser(user);
    }
}
