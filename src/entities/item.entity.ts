
export interface ProductProps {

    id: string,
    amount: number,
    orderId: string,
    productId: string,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}


export class Product {

    private props: ProductProps

    private get id(): string {
        return this.props.id;
    }

    private get amount(): number {
        return this.props.amount;
    }

    private get orderId(): string {
        return this.props.orderId;
    }

    private get productId(): string {
        return this.props.productId;
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

            amount,
            orderId,
            productId

        } = props;

        if (!amount || !orderId || !productId) {
            throw new Error("Preencha todos os campos.");
        } else if (amount < 0) {
            throw new Error("A quantidade deve ser maior que 0.");
        } else if (orderId.length < 3) {
            throw new Error("A descrição deve ter no mínimo 3 caracteres.");
        } else if (productId.length < 3) {
            throw new Error("A palavra-passe deve ter no mínimo 3 caracteres.");
        }

        this.props = props;
    }
}