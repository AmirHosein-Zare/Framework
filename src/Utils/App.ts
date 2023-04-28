import { Express } from "express";
import express from "express";
import Database from "./Mongoose/db";
import Router from "../Router/Router";

export default class App{
    private app: Express;
    private port: number | string;

    constructor(port: number | string){
        this.app = express();
        this.port = port;

        this.initializeRouter();
        this.connectToDb();
    }

    public listen(): void{
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}...`);
        })
    }   

    public connectToDb(): void{
        new Database().connect();
    }

    public initializeRouter(): void{
        new Router().init(this.app);
    }
}