import { Request, Response } from "express";

export interface APIMethods {
   create: (request: Request, response: Response) => Promise;
   getAll: (request: Request, response: Response) => Promise;
   getOne: (request: Request, response: Response) => Promise;
};