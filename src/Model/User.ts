import {Schema, model} from "mongoose";
import IUser from "./interface/IUser";
import Joi, { object, ObjectSchema } from "joi";

const userSchema: Schema = new Schema<IUser>({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
});

const User = model<IUser>('User', userSchema);

const validUser = async (data: IUser) => {
    const schema: ObjectSchema = await object({
        username: Joi.string().trim(),
        password: Joi.string().trim()
    }) 

    return schema.validate(data);
}

export {
    userSchema,
    User,
    validUser
}