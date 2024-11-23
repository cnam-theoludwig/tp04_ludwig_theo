import { Component } from "@angular/core"
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { ButtonDirective } from "../../directives/button/button.directive"
import { InputDirective } from "../../directives/input/input.directive"
import { LabelDirective } from "../../directives/label/label.directive"
import { MaxInputCharactersDirective } from "../../directives/max-input-characters/max-input-characters.directive"
import { PaymentCardNumberCodeDirective } from "../../directives/payment-card-number-code/payment-card-number-code.directive"
import { hasPaymentCardExpired, PaymentCard } from "../../models/payment-card"
import { PaymentCardService } from "../../services/payment-card.service"

@Component({
  selector: "app-payment-card-form",
  standalone: true,
  imports: [
    ButtonDirective,
    InputDirective,
    LabelDirective,
    MaxInputCharactersDirective,
    PaymentCardNumberCodeDirective,
    ReactiveFormsModule,
  ],
  templateUrl: "./payment-card-form.component.html",
  styleUrl: "./payment-card-form.component.css",
})
export class PaymentCardFormComponent {
  public readonly paymentCardForm: FormGroup

  public constructor(
    private readonly paymentCardService: PaymentCardService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.paymentCardForm = this.formBuilder.group(
      {
        holderName: ["", Validators.required],
        numberCode: [
          "",
          [Validators.required, Validators.pattern(/^\d{4}(?: \d{4}){3}$/)],
        ],
        ccv: ["", [Validators.required, Validators.pattern(/^\d{3}$/)]],
        expirationMonth: [
          "",
          [Validators.required, Validators.min(1), Validators.max(12)],
        ],
        expirationYear: ["", [Validators.required]],
      },
      {
        validators: (formGroup) => {
          const expirationMonthControl = formGroup.get("expirationMonth")
          const expirationYearControl = formGroup.get("expirationYear")
          if (
            expirationMonthControl === null ||
            expirationYearControl === null ||
            !expirationYearControl.valid ||
            !expirationMonthControl.valid
          ) {
            return null
          }
          const expirationYear = expirationYearControl.value
          const expirationMonth = expirationMonthControl.value
          const expired = hasPaymentCardExpired({
            expirationMonth,
            expirationYear,
          })
          return expired ? { cardExpired: true } : null
        },
      },
    )
  }

  public onSubmit(): void {
    if (!this.paymentCardForm.valid) {
      return
    }
    const paymentCard = this.paymentCardForm.value as PaymentCard
    this.paymentCardService.addPaymentCard(paymentCard)
    this.paymentCardForm.reset()
  }
}
