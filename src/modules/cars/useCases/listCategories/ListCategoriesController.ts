import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {

        try {
            const allCategories = await this.listCategoriesUseCase.execute();
            return res.status(200).json(allCategories)
        } catch (err: any) {
            return res.status(400)
                .json({
                    error: err.message,
                    info: "Not possible to list all categories"
                })
        }

    }
}

export { ListCategoriesController }