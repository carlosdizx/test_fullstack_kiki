import "dotenv/config";
import express, {Express} from "express";

export class  Server{
    private readonly port: string;
    private readonly app: Express;

    constructor(port: string) {
        this.port = port;
        this.app = express();
    }

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