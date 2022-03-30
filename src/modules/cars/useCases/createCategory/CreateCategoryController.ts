import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    handle(req: Request, res: Response) {
        try {
            const { name, description } = req.body;
            this.createCategoryUseCase.execute({ name, description });

            return res.status(201).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ error: err.message })
            }
        }

    }
}

export { CreateCategoryController }