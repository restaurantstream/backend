import { Request, Response } from "express";
import { FindAllOrdersService } from "../../services/order/FindAllOrdersService";

class FindAllOrdersController {

    async handle(req: Request, res: Response) {

        const findAllOrdersService = new FindAllOrdersService();

        const orders = await findAllOrdersService.execute();

        return res.status(200).json(orders);
    }
}

export { FindAllOrdersController }