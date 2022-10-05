import { Category } from "../entities/Category";

// DTO => Data Transfer Object
type ICreateCategoryDTO = {
    name: string;
    description: string;
};


interface ICategoriesRepository {
    create({ description, name }: ICreateCategoryDTO): Promise<void>
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category | undefined>;
}

export { ICategoriesRepository, ICreateCategoryDTO }