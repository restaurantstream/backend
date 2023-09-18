import { Request, Response } from "express";
import { z } from "zod";
import { FindManyProductByCategoryService } from "../../services/product/FindManyProductByCategoryService";


class FindManyProductByCategoryController {

    async handle(req: Request, res: Response) {

        const findManyProductByCategoryControllerSchema = z.object({
            categoryId: z.string({
                required_error: "O id da categoria não deve ser inválido.",
                invalid_type_error: "O id da categoria deve ser uma string."
            }).min(3, {
                message: "O id da categoria deve ter no mínimo 3 caracteres."
            })
        });

        const { categoryId } = findManyProductByCategoryControllerSchema.parse(req.query);
        
        const findManyProductByCategoryService = new FindManyProductByCategoryService();

        const products = await findManyProductByCategoryService.execute(categoryId);

        return res.status(200).json(products);
    }

}

export { FindManyProductByCategoryController }