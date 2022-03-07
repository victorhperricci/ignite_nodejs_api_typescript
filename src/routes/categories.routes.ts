import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

/**
 * Services são altos nivéis, rotas são baixos niveis, pois estão mais perto com o contato com o usuário,
 * services não precisam saber qual banco de dados estamos usandos, precisa dos métodos em si 
 * */

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body

    const createCategoriesService = new CreateCategoryService(categoriesRepository);
    createCategoriesService.execute({ name, description });

    return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();
    return res.status(200).json([...all])
})

export { categoriesRoutes }