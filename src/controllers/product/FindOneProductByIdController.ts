import { Request, Response } from "express";
import { z } from "zod";
import { FindOneCategoryByIdService } from "../../services/category/FindOneCategoryByIdService";
import { FindOneProductByIdService } from "../../services/product/FindOneProductByIdService";


class FindOneProductByIdController {

    async handle(req: Request, res: Response) {

        const findOneProductByIdSchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).min(3, {
                message: "O id deve ter no mínimo 3 caracteres."
            })
        });

        const { id } = findOneProductByIdSchema.parse(req.params);
        
        const findOneProductByIdService = new FindOneProductByIdService();

        const product = await findOneProductByIdService.execute(id);

        return res.status(200).json(product);
    }

}

export { FindOneProductByIdController }