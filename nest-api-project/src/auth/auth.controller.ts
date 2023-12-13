import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){
        this.authService
    }

    @Post('signup')
    async signup(){

        return "sign up"

    }

    @Post('login')
    async login(){

        return "sign in"
    }
}
