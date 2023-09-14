import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Category } from "../../entities/category.entity";
import { Order } from "../../entities/order.entity";
import { CreateOrderService } from "../../services/order/CreateOrderService";


class CreateOrderController {

    async handle(req: Request, res: Response) {

        const createOrderSchema = z.object({
            table: z.number({
                required_error: "A mesa não deve ser inválida.",
                invalid_type_error: "A mesa deve ser um número."
            }).min(1, {
                message: "A mesa deve ser maior que 0."
            }),
        })

        const { name } = req.body;
        const { table } = createOrderSchema.parse(req.body);

        new Order({ table });

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({ name, table });

        return res.status(201).json(order);
    }
}

export { CreateOrderController }