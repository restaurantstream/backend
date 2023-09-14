import { Request, Response } from "express";
import { FindAllProductsService } from "../../services/product/FindAllProductsService";

class FindAllProductsController {

    async handle(req: Request, res: Response) {
        
        const findAllProductsService = new FindAllProductsService();

        const products = await findAllProductsService.execute();

        return res.status(200).json(products);
    }
}

export { FindAllProductsController }