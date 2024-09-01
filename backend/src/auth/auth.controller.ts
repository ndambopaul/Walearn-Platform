import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth-guards';
import { CurrentUser } from './current-user.decorator';
import { Response } from 'express';
import { User } from 'src/users/users.schemas';
import { AuthDto } from './auth.dtos';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @UseGuards(LocalAuthGuard)
    async login(
        @CurrentUser() user: User,
        @Res({ passthrough: true }) response: Response,
        @Body() authDto: AuthDto
    ) {
        return await this.authService.login(user, response)
    }
}
