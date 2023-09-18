import prismaClient from "../../prisma"
import { FindOneOrderByIdService } from "./FindOneOrderByIdService";


class RemoveOrderByIdService {

    async execute(orderId: string) {

        const findOneOrderByIdService = new FindOneOrderByIdService();
        await findOneOrderByIdService.execute(orderId);

        const itemWithThisOrder = await prismaClient.item.findFirst({
            where: { orderId }
        })

        if (itemWithThisOrder) {
            throw new Error("Existe item com este pedido.");
        }
        
        const order = await prismaClient.order.delete({
            where: { id: orderId }
        });

        return order;
    }

}

export { RemoveOrderByIdService }