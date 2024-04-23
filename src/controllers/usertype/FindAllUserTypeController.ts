import { Request, Response } from "express";
import { FindAllUserTypeService } from "../../services/usertype/FindAllUserTypeService";

class FindAllUserTypeController {

    async handle(req: Request, res: Response) {

        const findAllUserTypeService = new FindAllUserTypeService();

        const userTypes = await findAllUserTypeService.execute();

        return res.status(200).json(userTypes);
    }
}

export { FindAllUserTypeController }