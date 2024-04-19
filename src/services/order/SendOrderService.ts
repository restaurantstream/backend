import prismaClient from "../../prisma"
import { FindOneOrderByIdService } from "./FindOneOrderByIdService";


class SendOrderService {

    async execute(orderId: string) {

        const findOneOrderByIdService = new FindOneOrderByIdService();
        await findOneOrderByIdService.execute(orderId);

        const order = await prismaClient.order.update({
            where: { id: orderId },

            data: {
                status: true,
                updatedAt: new Date()
            },
        });

        return order;
    }
}

export { SendOrderService }