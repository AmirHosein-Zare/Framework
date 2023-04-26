import { Express } from "express";
import express from "express";

export default class App{
    private app: Express;
    private port: number | string;

    constructor(port: number | string){
        this.app = express();
        this.port = port;
    }

    

}