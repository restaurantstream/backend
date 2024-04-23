import { Request, Response } from "express";
import { FindAllOrdersService } from "../../services/order/FindAllOrdersService";
import { FindOneOrderByIdService } from "../../services/order/FindOneOrderByIdService";
import { z } from "zod";

class FindOneOrderByIdController {

    async handle(req: Request, res: Response) {

        const findOneOrderSchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).uuid()
        });

        const { id } = findOneOrderSchema.parse(req.params);

        const findOneOrderByIdService = new FindOneOrderByIdService();

        const order = await findOneOrderByIdService.execute(id);

        return res.status(200).json(order);
    }
}

export { FindOneOrderByIdController }