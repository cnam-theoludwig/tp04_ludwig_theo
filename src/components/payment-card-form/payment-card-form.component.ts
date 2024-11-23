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
import { SelectDirective } from "../../directives/select/select.directive"
import { PaymentCard } from "../../models/payment-card"
import { PaymentCardService } from "../../services/payment-card.service"

@Component({
  selector: "app-payment-card-form",
  standalone: true,
  imports: [
    ButtonDirective,
    InputDirective,
    LabelDirective,
    SelectDirective,
    MaxInputCharactersDirective,
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
    this.paymentCardForm = this.formBuilder.group({
      holderName: ["", Validators.required],
      numberCode: ["", [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ["", [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expirationMonth: [
        "",
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
      expirationYear: [
        "",
        [Validators.required, Validators.pattern(/^\d{4}$/)],
      ],
    })
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
