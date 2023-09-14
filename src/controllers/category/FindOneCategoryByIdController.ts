import { Request, Response } from "express";
import { z } from "zod";
import { FindOneCategoryByIdService } from "../../services/category/FindOneCategoryByIdService";


class FindOneCategoryByIdController {

    async handle(req: Request, res: Response) {

        const findOneCategorySchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).min(3, {
                message: "O id deve ter no mínimo 3 caracteres."
            })
        });

        const { id } = findOneCategorySchema.parse(req.params);

        const findOneCategoryByIdService = new FindOneCategoryByIdService();

        const category = await findOneCategoryByIdService.execute(id);

        return res.status(200).json(category);
    }

}

export { FindOneCategoryByIdController }