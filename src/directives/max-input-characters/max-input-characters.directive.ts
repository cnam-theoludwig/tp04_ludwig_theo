import { Directive, ElementRef, HostListener, Input } from "@angular/core"

@Directive({
  selector: "[appMaxInputCharacters]",
  standalone: true,
})
export class MaxInputCharactersDirective {
  @Input("appMaxInputCharacters")
  public maxCharacters: number = 0

  public constructor(private readonly elementRef: ElementRef) {}

  @HostListener("input", ["$event"])
  public onInput(): void {
    const input = this.elementRef.nativeElement as HTMLInputElement
    if (input.value.length > this.maxCharacters) {
      input.value = input.value.slice(0, this.maxCharacters)
    }
  }
}
