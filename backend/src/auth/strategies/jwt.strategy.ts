import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";
import { TokenPayload } from "../token-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        configService: ConfigService,
        private readonly usersService: UsersService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    const authorization = request.headers?.authorization;
                    if (authorization && authorization.startsWith('Bearer ')) {
                        return authorization.split(' ')[1]; // Extracts the token part
                    }
                    return null;
                },
            ]),
            secretOrKey: configService.getOrThrow("JWT_ACCESS_TOKEN_SECRET")
        })
    }
    async validate(payload: TokenPayload) {
        return this.usersService.getUser({_id: payload.userId})
    }
}