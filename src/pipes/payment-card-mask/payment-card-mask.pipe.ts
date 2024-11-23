import { Pipe, PipeTransform } from "@angular/core"
import { getPaymentCardCompany } from "../../models/payment-card"

@Pipe({
  name: "paymentCardMask",
  standalone: true,
})
export class PaymentCardMaskPipe implements PipeTransform {
  public transform(cardNumber: string): string {
    const cardCompany = getPaymentCardCompany(cardNumber)
    let result = ""
    if (cardCompany !== "Unknown") {
      result += cardCompany + " "
    }
    result += "**** **** **** " + cardNumber.slice(-4)
    return result
  }
}
