import { Component, EventEmitter, Input, Output } from "@angular/core"
import { ButtonDirective } from "../../directives/button/button.directive"
import { getPaymentCardCompany, PaymentCard } from "../../models/payment-card"
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
  public selectedIndex: number | null = null

  @Output()
  public handleSelected = new EventEmitter<number | null>()

  public constructor(private readonly paymentCardService: PaymentCardService) {}

  public selectPaymentCard(index: number): void {
    if (index === this.selectedIndex) {
      this.handleSelected.emit(null)
      return
    }
    this.handleSelected.emit(index)
  }

  public get paymentCards(): PaymentCard[] {
    return this.paymentCardService.paymentCards
  }

  public getPaymentCardImage(numberCode: string): string {
    const company = getPaymentCardCompany(numberCode)
    return `/payment-cards/${company.toLowerCase()}.webp`
  }

  public deletePaymentCard(event: Event, indexToDelete: number): void {
    event.stopPropagation()
    this.paymentCardService.deletePaymentCard(indexToDelete)
  }
}
