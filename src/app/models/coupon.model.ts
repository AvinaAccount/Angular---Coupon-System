export class Coupon {

          amount: number
          category: number
          endDate: string
          id: number
          imageURL: string
          price: number
          startDate: string
          title: string
          description:string


          constructor(
                    id: number,
                    title: string,
                    startDate: string,
                    endDate: string,
                    category: number,
                    amount: number,
                    price: number,
                    imageURL: string,
                    description:string
          ) {
                    this.id = id
                    this.title = title
                    this.startDate = startDate
                    this.endDate = endDate
                    this.category = category
                    this.amount = amount
                    this.price = price
                    this.imageURL = imageURL
                    this.description = description
          }
}