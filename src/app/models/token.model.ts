export class Token {
        constructor(public token: string) {
        this.token = token
    }

    getToken() {
        return this.token.toString()
    }
}