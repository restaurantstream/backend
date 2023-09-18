import prismaClient from "../../prisma"
import { FindOneOrderByIdService } from "./FindOneOrderByIdService";


class FinishOrderService {

    async execute(orderId: string) {

        const findOneOrderByIdService = new FindOneOrderByIdService();
        await findOneOrderByIdService.execute(orderId);

        const order = await prismaClient.order.update({
            where: { id: orderId },

            data: {
                draft: false,
                updatedAt: new Date()
            },
        });

        return order;
    }

}

export { FinishOrderService }