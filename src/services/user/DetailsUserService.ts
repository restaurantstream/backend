
import prismaClient from "../../prisma";

class DetailsUserService {
    async execute(user_id: string,) {

        const user = await prismaClient.user.findFirst({
            where: { id: user_id },
            select: {
                id: true,
                name: true,
                email: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!user) {
            throw new Error("Nenhum usuário encontrado.");
        }

        return user;
    }
}

export { DetailsUserService }