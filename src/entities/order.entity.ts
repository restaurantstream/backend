
export interface OrderProps {

    table: number
}


export class Order {

    private props: OrderProps

    private get table(): number {
        return this.props.table;
    }

    constructor(props: OrderProps) {

        const {

            table,

        } = props;

        if (table < 1) {
            throw new Error("A mesa deve ser maior que 0.");
        }

        this.props = props;
    }
}