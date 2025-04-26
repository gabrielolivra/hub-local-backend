import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface ICurrentUser {
  sub: string
  email: string;
  iat: number,
  exp:number;

}
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user; 
  },
);