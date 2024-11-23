import { Component, effect } from "@angular/core"
import { FooterComponent } from "../components/footer/footer.component"
import { HeaderComponent } from "../components/header/header.component"
import { PaymentCardFormComponent } from "../components/payment-card-form/payment-card-form.component"
import { PaymentCardListComponent } from "../components/payment-card-list/payment-card-list.component"
import { ButtonDirective } from "../directives/button/button.directive"
import { PaymentCard } from "../models/payment-card"
import { PaymentCardService } from "../services/payment-card.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PaymentCardFormComponent,
    PaymentCardListComponent,
    ButtonDirective,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  public selectedPaymentCardId: PaymentCard["id"] | null = null

  public constructor(private readonly paymentCardService: PaymentCardService) {
    effect(() => {
      const paymentCard = this.paymentCardService.paymentCards.find(
        (paymentCard) => {
          return paymentCard.id === this.selectedPaymentCardId
        },
      )
      if (paymentCard == null) {
        this.selectedPaymentCardId = null
      }
    })
  }

  public selectPaymentCard(id: PaymentCard["id"] | null): void {
    this.selectedPaymentCardId = id
  }

  public get paymentCards(): PaymentCard[] {
    return this.paymentCardService.paymentCards
  }
}
