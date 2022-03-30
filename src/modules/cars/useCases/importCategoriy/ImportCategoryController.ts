import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { Request, Response } from "express";


export class ImportCategoryController {

    constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

    handle(req: Request, res: Response) {

        try {
            const { file } = req;

            if (!file) throw new Error("File not exists")

            this.importCategoryUseCase.execute(file);

            return res.send();
        } catch (err) {

        }


    }

}