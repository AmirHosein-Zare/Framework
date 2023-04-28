import { Request, Response } from "express";
import {User, validUser} from "../Model/User";

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

    async createUser(req: Request, res: Response): Promise<Object>{
        const result = await validUser(req.body);
        if(result.error) return res.status(403).send('Not Valid data');

        const user = new User({
            username: req.body.username,
            password: req.body.password
        })

        await user.save();
        return res.send(user);
    }
}