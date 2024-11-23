import { Component, EventEmitter, Input, Output } from "@angular/core"
import { ButtonDirective } from "../../directives/button/button.directive"
import {
  getPaymentCardCompany,
  hasPaymentCardExpired,
  PaymentCard,
} from "../../models/payment-card"
import { PaymentCardMaskPipe } from "../../pipes/payment-card-mask/payment-card-mask.pipe"
import { ZeroPadPipe } from "../../pipes/zero-pad/zero-pad.pipe"
import { PaymentCardService } from "../../services/payment-card.service"

@Component({
  selector: "app-payment-card-list",
  standalone: true,
  imports: [ButtonDirective, PaymentCardMaskPipe, ZeroPadPipe],
  templateUrl: "./payment-card-list.component.html",
  styleUrl: "./payment-card-list.component.css",
})
export class PaymentCardListComponent {
  @Input()
  public selectedId: PaymentCard["id"] | null = null

  @Output()
  public handleSelected = new EventEmitter<PaymentCard["id"] | null>()

  public constructor(private readonly paymentCardService: PaymentCardService) {}

  public selectPaymentCard(id: PaymentCard["id"]): void {
    if (id === this.selectedId) {
      this.handleSelected.emit(null)
      return
    }
    this.handleSelected.emit(id)
  }

  public get paymentCards(): PaymentCard[] {
    return this.paymentCardService.paymentCards
  }

  public getPaymentCardImage(numberCode: string): string {
    const company = getPaymentCardCompany(numberCode)
    return `/payment-cards/${company.toLowerCase()}.webp`
  }

  public hasPaymentCardExpired(
    input: Pick<PaymentCard, "expirationMonth" | "expirationYear">,
  ): boolean {
    return hasPaymentCardExpired(input)
  }

  public deletePaymentCard(event: Event, id: PaymentCard["id"]): void {
    event.stopPropagation()
    this.paymentCardService.deletePaymentCard(id)
  }
}
