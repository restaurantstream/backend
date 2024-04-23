import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Category } from "../../entities/category.entity";
import { Order } from "../../entities/order.entity";
import { CreateOrderService } from "../../services/order/CreateOrderService";
import { DetailsOrderService } from "../../services/order/DetailsOrderService";


class DetailsOrderController {

    async handle(req: Request, res: Response) {

        const detailsOrderSchema = z.object({
            orderId: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).uuid()
        });

        const { orderId } = detailsOrderSchema.parse(req.query);

        const findOneOrderByIdService = new DetailsOrderService();

        const order = await findOneOrderByIdService.execute(orderId);

        return res.status(200).json(order);
    }
}

export { DetailsOrderController }