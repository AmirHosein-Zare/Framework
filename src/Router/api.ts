import { Express } from "express";
import IController from "../Controller/interface/IController";

export default class Api{
    public init(app: Express, controllers: IController[]): void{
        controllers.forEach((controller) => {
            app.use('/', controller.router);
        })
    }
}