import { Request, Response } from "express";
import { z } from 'zod';

import { CreateUserTypeService } from "../../services/usertype/CreateUserTypeService";

class CreateUserTypeController {
    async handle(req: Request, res: Response) {

        const createUserTypeSchema = z.object({
            level: z.number({
                required_error: "O tipo de usuário não deve ser inválido.",
                invalid_type_error: "O tipo de usuário deve ser um número."
            })
        })

        const { level } = createUserTypeSchema.parse(req.body);

        const createUserTypeService = new CreateUserTypeService();

        const userType = await createUserTypeService.execute({ level });

        return res.status(201).json(userType);
    }
}

export { CreateUserTypeController }