import prismaClient from "../../prisma"

export interface ItemRequest {

    itemId: string
}

class DeleteItemService {

    async execute({ itemId }: ItemRequest) {

        const itemIdAlreadyExists = await prismaClient.item.findFirst({
            where: { id: itemId }
        });

        if (!itemIdAlreadyExists) {
            throw new Error(`Este item não existe.`);
        }

        const item = await prismaClient.item.delete({
            where: { id: itemId }
        });

        return item;

    }
}

export { DeleteItemService }