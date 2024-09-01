import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { Response } from 'express';
import { User } from 'src/users/users.schemas';
import { UsersService } from 'src/users/users.service';
import { TokenPayload } from './token-payload.interface';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    async login(user: User, response: Response) {
        const expiresAccessToken = new Date();
        expiresAccessToken.setMilliseconds(
            expiresAccessToken.getTime() + parseInt(
                this.configService.getOrThrow<string>("JWT_ACCESS_TOKEN_EXPIRATION_MS")
            )
        )

        const tokenPayload: TokenPayload = {
            userId: user._id.toHexString(),
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            gender: user.gender,
            phone_number: user.phone_number,
            role: user.role,
            username: user.username
        };

        const accessToken = this.jwtService.sign(
            tokenPayload, {
                secret: this.configService.getOrThrow("JWT_ACCESS_TOKEN_SECRET"),
                expiresIn: `${
                    this.configService.getOrThrow("JWT_ACCESS_TOKEN_EXPIRATION_MS")
                }ms`
            }
        )
       return { accessToken: accessToken, expires: expiresAccessToken }

    }

    async verifyUser(email: string, password: string) {
        try {
            const user = await this.usersService.getUser({
                email: email
            });

            const authenticated = await compare(password, user.password)
            if(!authenticated) {
                throw new UnauthorizedException()
            }
            return user;
        } catch (error) {
            throw new UnauthorizedException("Invalid credentials")
        }
    }
}
