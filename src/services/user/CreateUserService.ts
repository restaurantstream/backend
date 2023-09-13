import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

type CreateUserProps = {

    name: string,
    email: string,
    password: string
}

class CreateUserService {

    async execute({ name, email, password }: CreateUserProps) {

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new Error("Este email já foi cadastrado!");
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        });

        console.log(user);

        return user;
    }
}

export { CreateUserService }