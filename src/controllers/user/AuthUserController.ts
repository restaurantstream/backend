
import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { z } from "zod";


class AuthUserController {

    async handle(req: Request, res: Response) {

        const createUserSchema = z.object({

            email: z.string({
                required_error: "O email não deve ser inválido.",
                invalid_type_error: "O email deve ser uma string."
            }).email({
                message: "Endereço de email inválida."
            }).min(10, {
                message: "O nome deve ter no mínimo 10 caracteres."
            }).max(50, {
                message: "O nome deve ter no máximo 50 caracteres."
            }),
            password: z.string({
                required_error: "A palavra-passe não deve ser inválida.",
                invalid_type_error: "A palavra-passe deve ser uma string."
            }).min(6, {
                message: "A palavra-passe deve ter no mínimo 6 caracteres."
            }).max(50, {
                message: "A palavra-passe deve ter no máximo 50 caracteres."
            }),
        })

        const {
            email,
            password
        } = createUserSchema.parse(req.body);

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({ email, password });

        return res.status(200).json(auth);
    }
}


export { AuthUserController }