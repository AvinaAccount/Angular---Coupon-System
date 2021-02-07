
export class Coupon {
                    companyId: number
          title: string
          amount: number
          category: number
          imagURL: string
          // startDate: string
          // endDate: string

          constructor(
                    companyId: number,
                    title: string,
                    amount: number,
                    category: number,
                    imagURL: string
                    // startDate: number,
                    // endDate: number,
          ) {
                    this.companyId = companyId
                    this.title = title
                    this.amount = amount
                    this.category = category
                    this.imagURL = imagURL


          }
}