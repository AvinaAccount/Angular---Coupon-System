export class Coupon {
          id: number
          companyId: number
          title: string
          amount: number
          category: number
          startDate: Date
          endDate: Date
          imagURL: string

          constructor(id: number, 
                    companyId: number, 
                    title: string, 
                    amount: number, 
                    category: number, 
                    startDate: Date, 
                    endDate: Date, 
                    imagURL: string) { }
}