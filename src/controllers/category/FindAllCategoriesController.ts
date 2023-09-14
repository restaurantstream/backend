import { Request, Response } from "express";
import { FindAllCategoriesService } from "../../services/category/FindAllCategoriesService";

class FindAllCategoriesController {

    async handle(req: Request, res: Response) {
        
        const findAllCategoriesService = new FindAllCategoriesService();

        const categories = await findAllCategoriesService.execute();

        return res.status(200).json(categories);
    }

}

export { FindAllCategoriesController }