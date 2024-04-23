import { Request, Response } from "express";
import { z } from "zod";
import { FindOneUserTypeService } from "../../services/usertype/FindOneUserTypeService";

class FindOneUserTypeController {

    async handle(req: Request, res: Response) {


        const createUserTypeSchema = z.object({
            id: z.string({
                required_error: "O id não deve ser inválido.",
                invalid_type_error: "O id deve ser um número."
            })
        });

        const { id } = createUserTypeSchema.parse(req.params);

        const findOneUserTypeService = new FindOneUserTypeService();

        const userType = await findOneUserTypeService.execute(id);

        return res.status(200).json(userType);
    }

}

export { FindOneUserTypeController }