import bodyParser from "body-parser";
import Express, { Application} from "express";

import routers from "./router/Router";

class Server {

    private app: Application;
    private routers = routers;
    private port: number;

    constructor() {
        this.app = Express();
        this.port = 8080;
        this.routers = routers;
        this.middleware();
        this.router();
    }

    public main():void {
        this.app.listen(this.port, () => {
            console.log(`server running on http://localhost:${this.port}`);
        });
    }

    private middleware() {
        // parse application/json
        this.app.use(bodyParser.json());

        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // add your routers here
        this.app.use(routers);
    }

    private router():void {
        this.app.use(this.routers);
    }

}

const server = new Server();
server.main();