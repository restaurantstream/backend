import prismaClient from "../../prisma";


class FindOneUserTypeService {

    async execute(id: string) {

        const userType = await prismaClient.userType.findFirst({
            where: { id }
        });

        return userType;
    }
}

export { FindOneUserTypeService }