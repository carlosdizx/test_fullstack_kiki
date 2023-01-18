import "dotenv/config";
import express, {Express} from "express";

export class  Server{
    private readonly port: string;
    private readonly app: Express;

    constructor(port: string) {
        this.port = port;
        this.app = express();
    }
}