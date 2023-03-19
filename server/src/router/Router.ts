import { Router } from "express";

import AuthRouter from "./auth/AuthRouter";

class MainRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routers();
    }

    private routers():void {
        this.router.use("/api", AuthRouter);
    }

}

export default new MainRouter().router;