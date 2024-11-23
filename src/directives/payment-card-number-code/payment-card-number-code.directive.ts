import { Directive, HostListener, ElementRef } from "@angular/core"

@Directive({
  selector: "[appPaymentCardNumberCode]",
  standalone: true,
})
export class PaymentCardNumberCodeDirective {
  private readonly MAX_DIGITS = 16

  public constructor(private readonly element: ElementRef<HTMLInputElement>) {}

  @HostListener("input", ["$event"])
  public onInput(): void {
    const inputElement = this.element.nativeElement
    let value = inputElement.value.replace(/\D/g, "")

    if (value.length > this.MAX_DIGITS) {
      value = value.slice(0, this.MAX_DIGITS)
    }

    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ")
    inputElement.value = formattedValue
  }

  @HostListener("keydown", ["$event"])
  public onKeyDown(event: KeyboardEvent): void {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Delete",
    ]

    if (allowedKeys.includes(event.key)) {
      return
    }

    if (event.ctrlKey || event.metaKey) {
      return
    }

    if (!/\d/.test(event.key)) {
      event.preventDefault()
    }
  }
}
