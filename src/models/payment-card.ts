export interface PaymentCard {
  holderName: string
  numberCode: string
  ccv: string
  expirationMonth: number
  expirationYear: number
}

const PAYMENT_CARD_COMPANIES = [
  { code: "4", name: "Visa" },
  { code: "5", name: "Mastercard" },
] as const

export type PaymentCardCompany =
  | (typeof PAYMENT_CARD_COMPANIES)[number]["name"]
  | "Unknown"

export const getPaymentCardCompany = (
  numberCode: string,
): PaymentCardCompany => {
  return (
    PAYMENT_CARD_COMPANIES.find(({ code }) => {
      return numberCode.startsWith(code)
    })?.name ?? "Unknown"
  )
}

export const PAYMENT_CARD_MOCK: PaymentCard = {
  holderName: "Jean Dupont",
  numberCode: "1234567812345678",
  ccv: "123",
  expirationMonth: 12,
  expirationYear: new Date().getFullYear() + 1,
}

export const PAYMENT_CARD_MOCK_2: PaymentCard = {
  ...PAYMENT_CARD_MOCK,
  expirationMonth: 2,
  numberCode: "4234567812349876",
}

export const PAYMENT_CARD_MOCK_3: PaymentCard = {
  ...PAYMENT_CARD_MOCK,
  numberCode: "5234567812341234",
  expirationMonth: 5,
  expirationYear: new Date().getFullYear() + 2,
}

export const PAYMENT_CARDS_MOCK = [
  PAYMENT_CARD_MOCK,
  PAYMENT_CARD_MOCK_2,
  PAYMENT_CARD_MOCK_3,
]
