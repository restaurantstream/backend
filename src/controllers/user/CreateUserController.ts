import { Request, Response } from "express";
import { z } from 'zod';

import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {

        const createUserSchema = z.object({
            name: z.string({
                required_error: "O nome não deve ser inválido.",
                invalid_type_error: "O nome não deve ser uma string."
            }).min(3, {
                message: "O nome deve ter no mínimo 3 caracteres."
            }).max(100, {
                message: "O nome deve ter no máximo 100 caracteres."
            }),
            email: z.string({
                required_error: "O email não deve ser inválido.",
                invalid_type_error: "O email não deve ser uma string."
            }).email({
                message: "Endereço de email inválida."
            }).min(10, {
                message: "O nome deve ter no mínimo 10 caracteres."
            }).max(50, {
                message: "O nome deve ter no máximo 50 caracteres."
            }),
            password: z.string().min(6, {
                message: "A palavra-passe deve ter no mínimo 6 caracteres."
            }).max(50, {
                message: "A palavra-passe deve ter no máximo 50 caracteres."
            }),
        })

        const {

            name,
            email,
            password

        } = createUserSchema.parse(req.body);

        const createUserService = new CreateUserService();

        const user = createUserService.execute({name, email, password});

        return res.status(201).json(user);
    }
}

export { CreateUserController }