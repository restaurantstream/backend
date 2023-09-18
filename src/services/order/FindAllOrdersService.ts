import { Request, Response } from "express";
import prismaClient from "../../prisma";

class FindAllOrdersService {

    async execute() {

        const orders = await prismaClient.order.findMany({

            where: { draft: false },
            include: {
                items: true
            }
        })

        return orders;
    }
}

export { FindAllOrdersService }