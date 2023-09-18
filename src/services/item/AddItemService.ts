import prismaClient from "../../prisma"
import { FindOneOrderByIdService } from "../order/FindOneOrderByIdService";
import { FindOneProductByIdService } from "../product/FindOneProductByIdService";

export interface ItemRequest {

    amount: number,
    orderId: string,
    productId: string
}

class AddItemService {

    async execute({ amount, orderId, productId }: ItemRequest) {

        const findOneOrderByIdService = new FindOneOrderByIdService();
        await findOneOrderByIdService.execute(orderId);

        const findOneProductByIdService = new FindOneProductByIdService();
        await findOneProductByIdService.execute(productId);

        const itemAlreadyExists = await prismaClient.item.findFirst({
            where: { orderId, productId }
        });

        if (itemAlreadyExists) {
            throw new Error(`Este item já existe neste pedido.`);
        }

        const item = await prismaClient.item.create({
            data: {
                amount,
                orderId,
                productId
            }
        })

        return item;
    }
}

export { AddItemService }