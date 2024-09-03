import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDto } from './users.dtos';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from './users.schemas';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllUsers(@CurrentUser() user: User) {
        const userRole = user.role
        if (userRole != "ADMIN") {
            return { msg: "Only an admin can request for users details" }
        }
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
