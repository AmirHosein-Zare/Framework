import { Request, Response } from "express";
import {User} from "../Model/User";

export default class UserController{
    async getAll(req: Request, res: Response){
        const users = await User.find();
        if(!User) return res.status(404).send('Not Found');

        return res.send(users);
    }
}