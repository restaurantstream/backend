
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { FindOneUserByEmailService } from "./FindOneUserByEmailService";

interface AuthRequest {

    email: string;
    password: string;
}

class AuthUserService {

    async execute({ email, password }: AuthRequest) {

        const findOneUserByEmailService = new FindOneUserByEmailService();
        const user = await findOneUserByEmailService.execute(email);

        if (!user) {
            throw new Error("Email não encontrado!");
        }
        
        if (!user.status) {
            throw new Error("Consulte o administrador do sistema!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Palavra-passe incorreta!");
        }

        // Gerar o TOKEN do USER
        const token = sign({

            id: user.id,
            email: user.email,
            status: user.status,

        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return {
            id: user.id,
            email: user.email,
            status: user.status,
            token,
        }
    }
}

export { AuthUserService }