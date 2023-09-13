
export interface UserProps {

    id: string,
    name: string,
    email: string,
    password: string,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}


export class User {

    private props: UserProps


    private set setName(name:string) {
        this.props.name = name;
    }

    private set setEmail({ email }: UserProps) {
        this.props.email = email;
    }

    private set setPassword({ password }: UserProps) {
        this.props.password = password;
    }

    private get getId(): string {
        return this.props.id;
    }

    private get getName(): string {
        return this.props.name;
    }

    private get getEmail(): string {
        return this.props.email;
    }

    private get getPassword(): string {
        return this.props.password;
    }

    private get getStatus(): boolean {
        return this.props.status;
    }

    private get getCreatedAt(): Date {
        return this.props.createdAt;
    }

    private get getUpdatedAt(): Date {
        return this.props.updatedAt;
    }

    constructor(props: UserProps) {

        const {
            name,
            email,
            password
        } = props;

        if (name || email || password) {
            throw new Error("Preencha todos os campos.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 caracteres.");
        } else if (name.length < 3) {
            throw new Error("O nome deve ter no máximo 100 caracteres.");
        } else if (email.length < 3) {
            throw new Error("O email deve ter no mínimo 3 caracteres.");
        } else if (email.length < 3) {
            throw new Error("O email deve ter no máximo 50 caracteres.");
        } else if (password.length < 3) {
            throw new Error("A palavra-passe deve ter no mínimo 6 caracteres.");
        } else if (password.length < 3) {
            throw new Error("O email deve ter no máximo 50 caracteres.");
        }

        this.props = props;
    }
}