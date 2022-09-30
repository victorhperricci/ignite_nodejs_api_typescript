import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

// import { } from '';

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    handle(req: Request, res: Response): Response {

        try {
            const allCategories = this.listCategoriesUseCase.execute();
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