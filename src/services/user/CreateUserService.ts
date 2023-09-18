import { hash } from "bcryptjs";
import prismaClient from "../../prisma";
import { FindOneUserByEmailService } from "./FindOneUserByEmailService";

type CreateUserProps = {

    name: string,
    email: string,
    password: string
}

class CreateUserService {

    async execute({ name, email, password }: CreateUserProps) {

        const findOneUserByEmailService = new FindOneUserByEmailService();
        const userAlreadyExists = await findOneUserByEmailService.execute(email);

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

        return user;
    }
}

export { CreateUserService }