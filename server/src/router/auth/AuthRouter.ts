import { Router, Request, Response} from "express";

import UserController from "../../controllers/UserController";

class AuthRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routers();
    }

    private routers():void {
        this.router.post("/auth/signup", this.register);
        this.router.post("/auth/login", this.login);
    }

    private async login(req: Request, res: Response):Promise<void> {
        const userController = new UserController();
        userController.login(req, res);
    }

    private async register(req: Request, res: Response): Promise<void> {
        const userController = new UserController();
        userController.createUser(req, res);
    }

}

export default new AuthRouter().router;
