import { Product } from "./product.entity";

export interface CategoryProps {

    name: string,

}


export class Category {

    private props: CategoryProps

    private get name(): string {
        return this.props.name;
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