
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {

    email: string;
    password: string;
}

class AuthUserService {

    async execute({ email, password }: AuthRequest) {

        const user = await prismaClient.user.findFirst({

            where: {
                email,
                status: true
            }
        });

        if (!user) {
            throw new Error("Email ou palavra-passe não encontrada!");
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