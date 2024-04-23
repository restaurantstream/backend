import prismaClient from "../../prisma";


class DetailsOrderService {

    async execute(orderId: string) {

        const orders = await prismaClient.item.findMany({
            where: { orderId },
            include: { 
                product: true,
                order: true
            }
        })

        return orders;
    }
}

export { DetailsOrderService }