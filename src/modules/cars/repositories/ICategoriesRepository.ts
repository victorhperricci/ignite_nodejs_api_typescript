import { Category } from "../models/Category";

// DTO => Data Transfer Object
type ICreateCategoryDTO = {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: string): Category | undefined;
    list(): Category[];
    create({ description, name }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }