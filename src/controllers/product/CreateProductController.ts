import { Request, Response } from "express";
import { z } from "zod";
import { Product } from "../../entities/product.entity";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

    async handle(req: Request, res: Response) {

        const createProductSchema = z.object({
            name: z.string({
                required_error: "O nome não deve ser inválido.",
                invalid_type_error: "O nome não deve ser uma string."
            }).min(3, {
                message: "O nome deve ter no mínimo 3 caracteres."
            }).max(100, {
                message: "O nome deve ter no máximo 100 caracteres."
            }),
            description: z.string({
                required_error: "A descrição não deve ser inválido.",
                invalid_type_error: "A descrição não deve ser uma string."
            }).min(3, {
                message: "A descrição deve ter no mínimo 3 caracteres."
            }),
            price: z.string({
                required_error: "O preço não deve ser inválido.",
                invalid_type_error: "O preço deve ser uma string."
            }).min(3, {
                message: "O preço deve ter no mínimo 3 caracteres."
            }),
            categoryId: z.string({
                required_error: "A categoria não deve ser inválida.",
                invalid_type_error: "A categoria não deve ser uma string."
            }).min(3, {
                message: "A categoria deve ter no mínimo 3 caracteres."
            })
        });

        if (!req.file) {

            throw new Error("Erro ao carregar o ficheiro.");

        } else {

            const { filename: image } = req.file;

            const {

                name,
                price,
                description,
                categoryId

            } = createProductSchema.parse(req.body);

            new Product({ name, price, image, description, categoryId });

            const createProductService = new CreateProductService();

            const product = await createProductService.execute({ name, price, image, description, categoryId });

            return res.status(201).json(product);
        }
    }
}

export { CreateProductController }