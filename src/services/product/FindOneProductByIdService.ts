import prismaClient from "../../prisma";


class FindOneProductByIdService {

    async execute(id: string) {

        const product = await prismaClient.product.findFirst({
            where: { id }
        });

        if (!product) {
            throw new Error("Este produto não existe!");
        }

        return product;
    }

}

export { FindOneProductByIdService }