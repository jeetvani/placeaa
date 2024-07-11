export interface singleTicketInterface {
  type: string
  id: string
  bookedOn: {
    day: string
    dayShort: string
    date: number
    month: string
    year: number
    monthShort: string
    minute: number
    second: number
    am_pm: string
    hour24: number
    hour12: number
  }
  departure: { date_time: string; location: string }
  return: { date_time: string; location: string }
  packageDetail: { title: string; for: { days: number; nights: number } }
  email: string
  mobile: string
  sellerDetails: string
  costing: { basic: number; discount: number; tax: number; final: number }
  travellers: Array<{
    firstName: string
    lastName: string
    gender: string
    age: number
    contact: { countryCode: string; number: string }
    email: string
  }>
}
