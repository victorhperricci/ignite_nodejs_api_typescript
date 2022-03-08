import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryControllerr = new CreateCategoryController(createCategoryUseCase);

export { createCategoryControllerr }