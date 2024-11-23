import { Component } from "@angular/core"
import { FooterComponent } from "../components/footer/footer.component"
import { HeaderComponent } from "../components/header/header.component"
import { PaymentCardFormComponent } from "../components/payment-card-form/payment-card-form.component"
import { PaymentCardListComponent } from "../components/payment-card-list/payment-card-list.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PaymentCardFormComponent,
    PaymentCardListComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
