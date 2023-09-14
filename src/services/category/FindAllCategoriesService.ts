import { Request, Response } from "express";
import prismaClient from "../../prisma";

class FindAllCategoriesService {

    async execute() {
        
        const categories = await prismaClient.category.findMany();

        if(!categories) {
            throw new Error("Nenhuma categoria encontrada.");
        }
        
        return categories;
    }

}

export { FindAllCategoriesService }