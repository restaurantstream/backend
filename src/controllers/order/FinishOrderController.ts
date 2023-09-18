import { Request, Response } from "express";
import { z } from "zod";
import { FinishOrderService } from "../../services/order/FinishOrderService";


class FinishOrderController {

    async handle(req: Request, res: Response) {

        
        const removeOrderSchema = z.object({
            orderId: z.string({
                required_error: "O id do pedido não deve ser inválida.",
                invalid_type_error: "O id do pedido deve ser um número."
            }).min(3, {
                message: "O id do pedido deve ter no mínimo 3 caracteres."
            }),
        });

        const { orderId } = removeOrderSchema.parse(req.query);

        const finishOrderService = new FinishOrderService();

        const order = await finishOrderService.execute(orderId);

        return res.status(201).json(order);

    }
}

export { FinishOrderController }