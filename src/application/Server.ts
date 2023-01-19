import "dotenv/config";
import express, {Express} from "express";
import cors from "express";
import dbPostgresSQLInit from "./db/PostgreSQLConfig";
import { initRoutes } from "../infrastructure/controller";


export class  Server{
    private readonly port: string;
    private readonly app: Express;

    constructor(port: string) {
        this.port = port;
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.connectToDatabase().then();
        initRoutes(this.app)
    }

    connectToDatabase = async () => {
        await dbPostgresSQLInit();
    };

    listen = async (): Promise<void> => {
        return new Promise((resolve) => {
            this.app.listen(this.port, () => {
                console.log(`App is running at http://localhost:${this.port} in ${this.app.get("env")} mode`);
                console.log("Press CTRL-C to stop\n");
                resolve();
            });
        });
    };
}