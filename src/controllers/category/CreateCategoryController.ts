import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Category } from "../../entities/category.entity";


class CreateCategoryController {

    async handle(req: Request, res: Response) {

        const createUserSchema = z.object({
            name: z.string({
                required_error: "O nome não deve ser inválido.",
                invalid_type_error: "O nome deve ser uma string."
            }).min(3, {
                message: "O nome deve ter no mínimo 3 caracteres."
            }).max(100, {
                message: "O nome deve ter no máximo 100 caracteres."
            })
        })

        const { name } = createUserSchema.parse(req.body);

        new Category({ name });

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({ name });

        return res.status(201).json(category);
    }
}

export { CreateCategoryController }