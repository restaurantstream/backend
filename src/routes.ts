import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";


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
import { FindManyProductByCategoryController } from "./controllers/product/FindManyProductByCategoryController";
import { RemoveOrderByIdController } from "./controllers/order/RemoveOrderByIdController";
import { AddItemController } from "./controllers/item/AddItemController";
import { DeleteItemController } from "./controllers/item/DeleteItemController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { FindAllOrdersController } from "./controllers/order/FindAllOrdersController";
import { FindOneOrderByIdController } from "./controllers/order/FindOneOrderByIdController";
import { DeleteOneCategoryByIdController } from "./controllers/category/DeleteOneCategoryByIdController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


router.post("/users", new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/users', isAuth, new FindAllUsersController().handle);
router.get('/me', isAuth, new DetailsUserController().handle);
router.get('/users/:id', isAuth, new FindOneUserByIdController().handle);


router.get("/categories", isAuth, new FindAllCategoriesController().handle);
router.get('/categories/:id', isAuth, new FindOneCategoryByIdController().handle);
router.post("/categories", isAuth, new CreateCategoryController().handle);
router.delete("/categories", isAuth, new DeleteOneCategoryByIdController().handle);


router.get("/products", isAuth, new FindAllProductsController().handle);
router.get("/products/:id", isAuth, new FindOneProductByIdController().handle);
router.get("/category/products", isAuth, new FindManyProductByCategoryController().handle);
router.post("/products", upload.single('file'), isAuth, new CreateProductController().handle);


router.get("/orders", isAuth, new FindAllOrdersController().handle);
router.get("/orders/detail", isAuth, new DetailsOrderController().handle);
router.get("/orders/:id", isAuth, new FindOneOrderByIdController().handle);
router.post("/orders", isAuth, new CreateOrderController().handle);
router.delete("/orders", isAuth, new RemoveOrderByIdController().handle);
router.post("/orders/add", isAuth, new AddItemController().handle);
router.delete("/orders/delete", isAuth, new DeleteItemController().handle);
router.patch("/orders/send", isAuth, new SendOrderController().handle);
router.patch("/orders/finish", isAuth, new FinishOrderController().handle);



export { router }