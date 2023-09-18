import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../category/CreateCategoryService";
import { Category } from "../../entities/category.entity";
import { Product } from "../../entities/product.entity";
import prismaClient from "../../prisma";
import { FindOneCategoryByIdService } from "../category/FindOneCategoryByIdService";


class CreateProductService {

    async execute({ name, price, image, description, categoryId }) {

        const findOneCategoryByIdService = new FindOneCategoryByIdService()
        const category = await findOneCategoryByIdService.execute(categoryId)

        const productAlreadyExists = await prismaClient.product.findFirst({
            where: {
                name,
                categoryId
            }
        });

        if (productAlreadyExists) {
            throw new Error(`Este produto (${name}) já foi cadastrado na categoria (${category.name})`);
        }

        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                image,
                description,
                categoryId
            }
        });

        return product;
    }
}

export { CreateProductService }