import prismaClient from "../../prisma";

class FindAllProductsService {

    async execute() {
        
        const products = await prismaClient.product.findMany();

        if(!products) {
            throw new Error("Nenhum produto encontrado.");
        }
        
        return products;
    }

}

export { FindAllProductsService }