import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { Category } from "../../entities/Category"
import { getRepository, Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories
    }

    async findByName(name: string): Promise<Category | undefined>  {
        const category = await this.repository.findOne({ name });
        return category ? category : undefined
    }
}

export { CategoriesRepository }