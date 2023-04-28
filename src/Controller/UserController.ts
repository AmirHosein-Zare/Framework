import { Request, Response } from "express";
import {User} from "../Model/User";

export default class UserController{
    async getAll(req: Request, res: Response): Promise<Object>{
        const users = await User.find();
        if(!users) return res.status(404).send('Not Found');

        return res.send(users);
    }

    async getById(req: Request, res: Response): Promise<Object>{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send('Not Found');

        return res.send(user);
    }
}