import prismaClient from "../../prisma";


class FindAllUsersService {

    async execute() {

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return users;
    }

}

export { FindAllUsersService }