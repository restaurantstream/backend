import { Router } from "express";
import multer from "multer";


import { isAuth } from "./middlewares/isAuth";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { FindAllCategoriesController } from "./controllers/category/FindAllCategoriesController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { FindOneUserByIdController } from "./controllers/user/FindOneUserByIdController";
import { FindAllUsersController } from "./controllers/user/FindAllUsersController";
import { FindOneCategoryByIdController } from "./controllers/category/FindOneCategoryByIdController";
import { FindAllProductsController } from "./controllers/product/FindAllProductsController";
import { FindOneProductByIdController } from "./controllers/product/FindOneProductByIdController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.get('/users', new FindAllUsersController().handle);
router.get('/me', isAuth, new DetailsUserController().handle);
router.get('/users/:id', new FindOneUserByIdController().handle);
router.post("/users", new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);


router.get("/categories", new FindAllCategoriesController().handle);
router.get('/categories/:id', new FindOneCategoryByIdController().handle);
router.post("/categories", new CreateCategoryController().handle);


router.get("/products", new FindAllProductsController().handle);
router.get("/products/:id", new FindOneProductByIdController().handle);
router.post("/products", upload.single('file'), new CreateProductController().handle);


router.post("/orders", new CreateOrderController().handle);


export { router }