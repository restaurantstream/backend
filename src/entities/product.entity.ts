import { Item } from "@prisma/client";

export interface ProductProps {

    id: string,
    name: string,
    description: string,
    price: string,
    image: string,
    categoryId: string,
    items: Item[],
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}


export class Product {

    private props: ProductProps

    private get id(): string {
        return this.props.id;
    }

    private get name(): string {
        return this.props.name;
    }

    private get description(): string {
        return this.props.description;
    }

    private get price(): string {
        return this.props.price;
    }

    private get image(): string {
        return this.props.image;
    }

    private get categoryId(): string {
        return this.props.categoryId;
    }

    private get items(): Item[] {
        return this.props.items;
    }

    private get status(): boolean {
        return this.props.status;
    }

    private get createdAt(): Date {
        return this.props.createdAt;
    }

    private get updatedAt(): Date {
        return this.props.updatedAt;
    }

    constructor(props: ProductProps) {

        const {

            name,
            description,
            price,
            image,
            categoryId

        } = props;

        if (!name || !description || !price || !image || !categoryId) {
            throw new Error("Preencha todos os campos.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 caracteres.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no máximo 100 caracteres.");
        } else if (description.length < 3) {
            throw new Error("A descrição deve ter no mínimo 3 caracteres.");
        } else if (image.length < 3) {
            throw new Error("A imagem deve ter no mínimo 3 caracteres.");
        } else if (price.length < 3) {
            throw new Error("O preço deve ter no mínimo 3 caracteres.");
        } else if (categoryId.length < 3) {
            throw new Error("A palavra-passe deve ter no mínimo 3 caracteres.");
        }

        this.props = props;
    }
}