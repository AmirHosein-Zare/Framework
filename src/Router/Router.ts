import { Express, urlencoded } from "express";
import express from 'express';
import morgan from "morgan";

export default class Router{
    public init(app: Express): void{
        app.use(morgan('tiny'));
        app.use(urlencoded({extended: true}));
        app.use(express.json());
    }
}