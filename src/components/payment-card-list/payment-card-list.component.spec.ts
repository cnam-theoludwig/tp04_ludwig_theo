import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PaymentCardListComponent } from "./payment-card-list.component"

describe("PaymentCardListComponent", () => {
  let component: PaymentCardListComponent
  let fixture: ComponentFixture<PaymentCardListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCardListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PaymentCardListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
