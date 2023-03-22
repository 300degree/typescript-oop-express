import { Request, Response } from "express";

import LoginController from "./auth/LoginController";
import SignupController from "./auth/SignupController";

export default class UserController {

    public async login(req: Request, res: Response):Promise <void> {
        const loginController = new LoginController();
        loginController.main(req, res);
    }

    public async createUser(req: Request, res: Response):Promise <void> {
        const signupController = new SignupController();
        signupController.main(req, res);
    }

}
