import prismaClient from "../../prisma"

type CreateOrderProps = {

    table: number,
    name: string
}

class CreateOrderService {

    async execute({ table, name }: CreateOrderProps) {

        const order = await prismaClient.order.create({
            data: {
                table,
                name
            }
        });

        return order;
    }
}

export { CreateOrderService }