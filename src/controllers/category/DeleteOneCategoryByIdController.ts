import { Request, Response } from "express";
import { z } from "zod";
import { DeleteOneCategoryByIdService } from "../../services/category/DeleteOneCategoryByIdService";


class DeleteOneCategoryByIdController {

    async handle(req: Request, res: Response) {

        const deleteOneCategorySchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).min(3, {
                message: "O id deve ter no mínimo 3 caracteres."
            })
        });

        const { id } = deleteOneCategorySchema.parse(req.query);

        const deleteOneCategoryByIdService = new DeleteOneCategoryByIdService();

        const category = await deleteOneCategoryByIdService.execute(id);

        return res.status(200).json(category);
    }

}

export { DeleteOneCategoryByIdController }