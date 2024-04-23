import prismaClient from "../../prisma";


class FindAllUserTypeService {

    async execute() {
        return await prismaClient.userType.findMany();
    }
}

export { FindAllUserTypeService }