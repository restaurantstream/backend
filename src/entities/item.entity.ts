
export interface ItemProps {

    amount: number,
    orderId: string,
    productId: string
}


export class Item {

    private props: ItemProps

    private get amount(): number {
        return this.props.amount;
    }

    private get orderId(): string {
        return this.props.orderId;
    }

    private get productId(): string {
        return this.props.productId;
    }

    constructor(props: ItemProps) {

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