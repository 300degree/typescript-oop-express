import { Request, Response } from "express";

import { Login } from "./auth/LoginController";
import { SignupController } from "./auth/SignupController";

class UserController {

    constructor() {}

    public async login(req: Request, res: Response):Promise <void> {
        Login(req, res)
    }

    public async createUser(req: Request, res: Response):Promise <void> {
        SignupController(req, res)
    }

}

export default UserController;