import { Specification } from "../../models/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepositoy";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[]

    constructor() {
        this.specifications = []
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(spec => spec.name === name);
        return specification || undefined
    }

}

export { SpecificationRepository }