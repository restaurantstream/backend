import { Request, Response } from "express";
import { z } from "zod";
import { Item } from "../../entities/item.entity";
import { AddItemService } from "../../services/item/AddItemService";
import { DeleteItemService } from "../../services/item/DeleteItemService";


class DeleteItemController {

    async handle(req: Request, res: Response) {

        const deleteItemSchema = z.object({
            itemId: z.string({
                required_error: "O id do item não deve ser inválido.",
                invalid_type_error: "O id do item deve ser uma string."
            }).min(3, {
                message: "O id do item deve ter no mínimo 3 caracteres."
            }).max(50, {
                message: "O id do item deve ter no máximo 50 caracteres."
            }),
        });

        const { itemId } = deleteItemSchema.parse(req.query);

        const deleteItemService = new DeleteItemService();

        const item = await deleteItemService.execute({ itemId });

        return res.status(200).json(item);
    }
}

export { DeleteItemController }