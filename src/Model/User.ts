import {Schema, model} from "mongoose";
import IUser from "./interface/IUser";

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

export {
    userSchema,
    User
}