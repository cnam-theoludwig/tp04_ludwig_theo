import { PaymentCardMaskPipe } from "./payment-card-mask.pipe"

describe("PaymentCardMaskPipe", () => {
  it("create an instance", () => {
    const pipe = new PaymentCardMaskPipe()
    expect(pipe).toBeTruthy()
  })
})
