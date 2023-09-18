import prismaClient from "../../prisma";
import { FindOneCategoryByIdService } from "../category/FindOneCategoryByIdService";


class FindManyProductByCategoryService {

    async execute(categoryId: string) {

        const findOneCategoryByIdService = new FindOneCategoryByIdService()
        const category = await findOneCategoryByIdService.execute(categoryId)

        const products = await prismaClient.product.findMany({
            where: { categoryId }
        });

        if (!products) {
            throw new Error(`Nenhum producto encontrado para esta categoria (${category.name})`);
        }

        return products;
    }
}

export { FindManyProductByCategoryService }