import { Request, Response, NextFunction } from 'express';
import userService from '../service/userService';
import { UserDocument } from '../models/user-model';
import ExceptionHandler from '../decorators/exceptionHandler';

declare module 'express' {
  export interface Request {
    user?: UserDocument;
  }
}

class userController {

  @ExceptionHandler()
  async getUser(req: Request, res: Response, next: NextFunction) {
    const userId = req.user?.id;
    const user = await userService.getUser(userId);

    return res.json(user);
  }
}

export default new userController();
