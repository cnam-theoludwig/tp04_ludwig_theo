import { PaymentCardNumberCodeDirective } from "./payment-card-number-code.directive"
import { ElementRef } from "@angular/core"

class MockElementRef extends ElementRef {
  public constructor() {
    super(null)
  }
}

describe("PaymentCardNumberCodeDirective", () => {
  it("should create an instance", () => {
    const directive = new PaymentCardNumberCodeDirective(new MockElementRef())
    expect(directive).toBeTruthy()
  })
})
