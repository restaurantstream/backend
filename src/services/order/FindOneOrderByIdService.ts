import prismaClient from "../../prisma";

class FindOneOrderByIdService {

    async execute(orderId: string) {

        const order = await prismaClient.order.findFirst({
            where: { id: orderId }
        });

        if (!order) {
            throw new Error(`Este pedido não existe!`);
        }

        return order;
    }
}

export { FindOneOrderByIdService }