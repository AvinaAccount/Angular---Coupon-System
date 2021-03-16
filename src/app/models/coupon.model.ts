
export class Coupon {

          amount: number
          category: number
          endDate: string
          id: number
          imageURL: string
          price: number
          startDate: string
          title: string


          constructor(
                    id: number,
                    title: string,
                    startDate: string,
                    endDate: string,
                    category: number,
                    amount: number,
                    price: number,
                    imageURL: string,
          ) {
                    this.id = id
                    this.title = title
                    this.startDate = startDate
                    this.endDate = endDate
                    this.category = category
                    this.amount = amount
                    this.price = price
                    this.imageURL = imageURL
          }
}