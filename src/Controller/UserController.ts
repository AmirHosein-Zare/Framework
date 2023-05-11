import { Request, Response } from "express";
import {User, validUser} from "../Model/User";
import { Router } from "express";

export default class UserController{
    router: Router;
    path: string;

    constructor(router: Router){
        this.path = '/api/user'
        this.router = router;

        this.initializeRouter();
    }

    private initializeRouter(){
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/:id', this.getById);
        this.router.post(this.path, this.createUser);
        this.router.put(this.path + '/:id', this.editUser);
        this.router.delete(this.path + '/:id', this.deleteUser);
    }

    async getAll(req: Request, res: Response): Promise<any>{
        const users = await User.find();
        if(!users) return res.status(404).send('Not Found');

        return res.send(users);
    }

    async getById(req: Request, res: Response): Promise<any>{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send('Not Found');

        return res.send(user);
    }

    async createUser(req: Request, res: Response): Promise<any>{
        const result = await validUser(req.body);
        if(result.error) return res.status(400).send('Not Valid data');

        const user = new User({
            username: req.body.username,
            password: req.body.password
        })

        await user.save();
        return res.send(user);
    }

    async editUser(req: Request, res: Response): Promise<any>{
        const findUser = await User.findById(req.params.id);
        if(!findUser) return res.status(404).send('User not found');

        const result = await validUser(req.body);
        if(result.error) return res.status(400).send('Not Valid Data');

        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                password: req.body.password
            }
        }, {new: true})

        res.send(user);
    }

    async deleteUser(req: Request, res: Response): Promise<any>{
        const findUser = await User.findById(req.params.id);
        if(!findUser) return res.status(404).send('User not found');

        const user = await User.findByIdAndRemove(req.params.id);

        res.send(user);
    }
}