import { Request, Response, Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuth } from "./middlewares/isAuth";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuth, new DetailsUserController().handle);

export { router }