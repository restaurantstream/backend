import prismaClient from "../../prisma";



type CreateUserTypeProps = {
    level: number
}

class CreateUserTypeService {


    async execute({ level }: CreateUserTypeProps) {

        const userTypeAlreadyExists = await prismaClient.userType.findUnique({
            where: { level }
        });

        if (userTypeAlreadyExists) {
            throw new Error("Este tipo de usuário já foi cadastrado!");
        }
        
        return await prismaClient.userType.create({
            data: { level }
        });
    }
}

export { CreateUserTypeService }