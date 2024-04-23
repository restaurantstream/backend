import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import prismaClient from "../prisma";

interface Payload {
    sub: string;
}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            message: "Nenhum Token existente!"
        }).end();
    }

    const [, token] = authToken.split(" ");

    try {

        const { sub } = verify(

            token,
            process.env.JWT_SECRET

        ) as Payload;

        req.user_id = sub;
        
        const user = await prismaClient.user.findUnique({
            where: { id: req.user_id },
            include: {
                userType: true
            }
        });

        if (user.userType.level !== 1)
            return res.status(403).json({
                message: "Área restrita. Somente pessoas autorizadas!"
            }).end();

        return next();

    } catch (err) {
        return res.status(403).json({
            message: "Área restrita. Somente pessoas autorizadas!"
        }).end();
    }
}