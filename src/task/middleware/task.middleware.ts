import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LoggerTaskMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("BEFORE CONROLLER")
        next()
        console.log("AFTER CONTROLLER")
    }

}