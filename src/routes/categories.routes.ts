import { Router } from 'express'
import { createCategoryControllerr } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

/**
 * Services são altos nivéis, rotas são baixos niveis, pois estão mais perto com o contato com o usuário,
 * services não precisam saber qual banco de dados estamos usandos, precisa dos métodos em si 
 * */

categoriesRoutes.post("/", (req, res) => {
    return createCategoryControllerr.handle(req, res);
})

categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
})

export { categoriesRoutes }