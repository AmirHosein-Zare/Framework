import { connect } from "mongoose";
import { get } from "config";

export default class Database{
    async connect(): Promise<void>{
        await connect(get('db'));
    }
}