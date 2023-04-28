import { Router } from "express";

export default interface IController{
    router: Router;
    path: String;
}