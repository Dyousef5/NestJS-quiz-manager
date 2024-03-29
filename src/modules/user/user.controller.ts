import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { SETTINGS } from 'src/app.utlis';
import { User } from './user.entity';

@Controller('user')
export class UserController {
   constructor(private userService: UserService) {}

   @Post('/register')
   async doUserRegistration(
      @Body(SETTINGS.VALIDATION_PIPE)
      userRegister: UserRegisterRequestDto,
   ): Promise<User> {
      return await this.userService.doUserRegistration(userRegister);
   }
}
