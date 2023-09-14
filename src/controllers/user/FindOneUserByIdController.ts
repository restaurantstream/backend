import { Request, Response } from "express";
import { z } from "zod";
import { FindOneUserByIdService } from "../../services/user/FindOneUserByIdService";

class FindOneUserByIdController {

    async handle(req: Request, res: Response) {


        const createUserSchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser uma string."
            }).min(3, {
                message: "O id deve ter no mínimo 3 caracteres."
            })
        });

        const { id } = createUserSchema.parse(req.params);

        const findOneUserByIdService = new FindOneUserByIdService();

        const user = await findOneUserByIdService.execute(id);

        return res.status(200).json(user);
    }

}

export { FindOneUserByIdController }