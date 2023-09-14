import prismaClient from "../../prisma";


class FindOneCategoryByIdService {

    async execute(id: string) {

        const category = await prismaClient.category.findFirst({
            where: { id }
        });

        if (!category) {
            throw new Error("Esta categoria não existe!");
        }

        return category;
    }

}

export { FindOneCategoryByIdService }