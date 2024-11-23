import { Injectable, signal } from "@angular/core"
import { PAYMENT_CARDS_MOCK, PaymentCard } from "../models/payment-card"

@Injectable({
  providedIn: "root",
})
export class PaymentCardService {
  private readonly _paymentCards = signal<PaymentCard[]>(PAYMENT_CARDS_MOCK)
  // private readonly _paymentCards = signal<PaymentCard[]>([])

  public get paymentCards(): PaymentCard[] {
    return this._paymentCards()
  }

  public addPaymentCard(card: PaymentCard): void {
    this._paymentCards.update((cards) => {
      return [
        ...cards,
        {
          ...card,
          id: crypto.randomUUID(),
        },
      ]
    })
  }

  public deletePaymentCard(id: PaymentCard["id"]): void {
    this._paymentCards.update((cards) => {
      return cards.filter((paymentCard) => {
        return paymentCard.id !== id
      })
    })
  }
}
