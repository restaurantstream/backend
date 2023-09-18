import { Request, Response } from "express";
import { z } from "zod";
import { Item } from "../../entities/item.entity";
import { AddItemService } from "../../services/item/AddItemService";


class AddItemController {

    async handle(req: Request, res: Response) {

        const addItemSchema = z.object({
            orderId: z.string({
                required_error: "O id do pedido não deve ser inválido.",
                invalid_type_error: "O id do pedido deve ser uma string."
            }).min(3, {
                message: "O id do pedido deve ter no mínimo 3 caracteres."
            }).max(50, {
                message: "O id do pedido deve ter no máximo 50 caracteres."
            }),
            productId: z.string({
                required_error: "O id do produto não deve ser inválido.",
                invalid_type_error: "O id do produto deve ser uma string."
            }).min(3, {
                message: "O id do produto deve ter no mínimo 3 caracteres."
            }).max(50, {
                message: "O id do produto deve ter no máximo 50 caracteres."
            }),
            amount: z.number({
                required_error: "A quantidade não deve ser inválida.",
                invalid_type_error: "A quantidade deve ser uma string."
            }).min(0, {
                message: "A quantidade deve ser maior que zero."
            }).max(50, {
                message: "A quantidade deve ser menor que 50."
            }),
        });

        const { amount, orderId, productId } = addItemSchema.parse(req.body);

        new Item({ amount, orderId, productId });

        const addItemService = new AddItemService();

        const item = await addItemService.execute({ amount, orderId, productId });

        return res.status(201).json(item);
    }
}

export { AddItemController }