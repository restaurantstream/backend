import prismaClient from "../../prisma";


class DeleteOneCategoryByIdService {

    async execute(id: string) {

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: { id }
        });

        if (!categoryAlreadyExists) {
            throw new Error("Esta categoria não existe!");
        }

        const category = await prismaClient.category.delete({
            where: { id }
        })

        return category;
    }

}

export { DeleteOneCategoryByIdService }