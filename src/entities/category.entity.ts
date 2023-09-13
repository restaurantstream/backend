import { Product } from "./product.entity";

export interface CategoryProps {

    id: string,
    name: string,
    status: boolean,
    products: Product[]
    createdAt: Date,
    updatedAt: Date,

}


export class Category {

    private props: CategoryProps

    private get id(): string {
        return this.props.id;
    }

    private get name(): string {
        return this.props.name;
    }

    private get products(): Product[] {
        return this.props.products;
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

    constructor(props: CategoryProps) {

        const {
            name
        } = props;

        if (!name) {
            throw new Error("Preencha todos os campos.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 caracteres.");
        } else if (name.length > 100) {
            throw new Error("O nome deve ter no máximo 100 caracteres.");
        }

        this.props = props;
    }
}