import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}
  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};
    console.log('CurrentUserInterceptor', userId);
    if (userId) {
      const user = await this.usersService.findOne(userId);
      if (user) {
        console.log('currentUserInterceptor user', user);
        request.currentUser = user;
        console.log('request.currentUser', request.currentUser.id);
      } else {
        throw new NotFoundException('User not found');
      }
    }
    return handler.handle();
  }
}
