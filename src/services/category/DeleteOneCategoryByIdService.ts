import prismaClient from "../../prisma";
import { FindOneCategoryByIdService } from "./FindOneCategoryByIdService";


class DeleteOneCategoryByIdService {

    async execute(id: string) {

        const findOneCategoryByIdService = new FindOneCategoryByIdService();
        await findOneCategoryByIdService.execute(id);

        const productWithThisCategory = await prismaClient.product.findFirst({
            where: { categoryId: id }
        });

        if (productWithThisCategory) {
            throw new Error("Existe produto com esta categoria.");
        }

        const category = await prismaClient.category.delete({
            where: { id }
        });

        return category;
    }
}

export { DeleteOneCategoryByIdService }