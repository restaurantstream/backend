
export interface OrderProps {

    id: string,
    name: string,
    table: number,
    draft: boolean,
    items: [],
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}


export class Order {

    private props: OrderProps

    private get id(): string {
        return this.props.id;
    }

    private get name(): string {
        return this.props.name;
    }

    private get table(): number {
        return this.props.table;
    }

    private get draft(): boolean {
        return this.props.draft;
    }

    private get items(): [] {
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

    constructor(props: OrderProps) {

        const {

            name,
            table,

        } = props;

        if (!name || !table ) {
            throw new Error("Preencha todos os campos.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 caracteres.");
        } else if (name.length > 100) {
            throw new Error("O nome deve ter no máximo 100 caracteres.");
        } else if (table < 1) {
            throw new Error("A mesa deve ser maior que 0.");
        }

        this.props = props;
    }
}