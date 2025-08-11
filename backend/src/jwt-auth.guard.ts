import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate{
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        //Authorization: Bearer <token>
        
        const token = request.headers.authorization?.split(' ')[1];

        if(!token){
            return false;
        }
        return true;
    }
}