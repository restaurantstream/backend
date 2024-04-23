import prismaClient from "../../prisma";


class FindOneUserByIdService {

    async execute(id: string) {

        const user = await prismaClient.user.findFirst({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!user) throw new Error("Este usuário não existe!");

        return user;
    }
}

export { FindOneUserByIdService }