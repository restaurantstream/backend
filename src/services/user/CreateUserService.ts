
type CreateUserProps = {

    name: string,
    email: string,
    password: string
}

class CreateUserService {

    async execute({name, email, password}: CreateUserProps) {

        console.log({name, email, password});
        
        return name;
    }

}

export { CreateUserService }