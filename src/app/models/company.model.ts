export class Company {
          id: number
          name: string
          email: string
          password: string
          logoURL:string

          constructor(
                    id: number,
                    name: string,
                    email: string,
                    password: string,
                    logoURL:string
          ) {
                    this.id = id
                    this.name = name
                    this.email = email
                    this.password = password
                    this.logoURL = logoURL
          }
}