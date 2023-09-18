import prismaClient from "../../prisma";


class FindOneUserByEmailService {

    async execute(email: string) {

        const user = await prismaClient.user.findFirst({
            where: { email }
        });

        return user;
    }
}

export { FindOneUserByEmailService }