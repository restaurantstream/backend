import { Request, Response } from "express";
import { z } from "zod";
import { DetailsUserService } from "../../services/user/DetailsUserService";


class DetailsUserController {

    async handle(req: Request, res: Response) {

        const { user_id } = req;
        
        const detailsUserService = new DetailsUserService();

        const user = await detailsUserService.execute(user_id);

        return res.status(200).json(user);
    }
}

export { DetailsUserController }