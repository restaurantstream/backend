import prismaClient from "../../prisma"

type CreateCategoryProps = {

    name: string
}

class CreateCategoryService {

    async execute({ name }: CreateCategoryProps) {

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: { name }
        });

        if (categoryAlreadyExists) {
            throw new Error("Esta categoria (" + name + ") já foi cadastrada!");
        }

        const category = await prismaClient.category.create({
            data: {
                name,
            }
        });

        return category;
    }
}

export { CreateCategoryService }