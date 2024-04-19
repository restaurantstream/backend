import { Request, Response } from "express";
import { z } from "zod";
import { SendOrderService } from "../../services/order/SendOrderService";


class SendOrderController {

    async handle(req: Request, res: Response) {
        
        const sendOrderSchema = z.object({
            orderId: z.string({
                required_error: "O id do pedido não deve ser inválida.",
                invalid_type_error: "O id do pedido deve ser um número."
            }).min(3, {
                message: "O id do pedido deve ter no mínimo 3 caracteres."
            }),
        });

        const { orderId } = sendOrderSchema.parse(req.query);

        const sendOrderService = new SendOrderService();

        const order = await sendOrderService.execute(orderId);

        return res.status(201).json(order);

    }
}

export { SendOrderController }