import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDto } from './users.dtos';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/auth/guards/local.auth-guards';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from './users.schemas';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Post("register")
    async registerUser(@Body() userDto: UserDto) {
        return this.usersService.registerUser(userDto)
    }

    @Get("profile")
    @UseGuards(JwtAuthGuard)
    async getUserProfile(@CurrentUser() user: User) {
        return user
    }
}
