import { Request, Response } from "express";
import { z } from "zod";
import { FindOneUserByIdService } from "../../services/user/FindOneUserByIdService";
import { FindAllUsersService } from "../../services/user/FindAllUsersService";

class FindAllUsersController {

    async handle(req: Request, res: Response) {

        const findAllUsersService = new FindAllUsersService();

        const users = await findAllUsersService.execute();

        return res.status(200).json(users);
    }

}

export { FindAllUsersController }