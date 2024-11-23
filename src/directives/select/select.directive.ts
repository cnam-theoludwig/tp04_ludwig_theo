import { computed, Directive } from "@angular/core"
import { cva } from "cva"
import { classNames } from "../../utils/classNames"

const selectVariants = cva({
  base: "py-3 px-4 pe-9 block rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none",
})

@Directive({
  selector: "[appSelect]",
  standalone: true,
  host: {
    "[class]": "computedClass()",
  },
})
export class SelectDirective {
  public computedClass = computed(() => {
    return classNames(selectVariants())
  })
}
