
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
          amount: number,
          category: number,
          endDate: string,
          id: number,
          imageURL: string,
          price: number,
          startDate: string,
          title: string,
     ) {
          this.id = id
          // this.companyId = companyId
          this.title = title
          this.startDate = startDate
          this.endDate = endDate
          this.category = category
          this.amount = amount
          this.price = price
          this.imageURL = imageURL
     }

}