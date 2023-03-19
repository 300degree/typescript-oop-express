
class User{

    private email: string;
    private username: string;
    private password: string;

    constructor(email: string, username: string, password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.main();
    }

    public main() {
        this.getEmail();
        this.getUsername();
        this.getPassword();
    }

    private getEmail():string {
        return this.email;
    }

    private getUsername():string {
        return this.username;
    }

    private getPassword():string {
        return this.password;
    }

}

export default User;