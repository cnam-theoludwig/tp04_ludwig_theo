import { computed, Directive } from "@angular/core"
import { cva } from "cva"
import { classNames } from "../../utils/classNames"

const labelVariants = cva({
  base: "block text-sm font-medium mb-2",
})

@Directive({
  selector: "[appLabel]",
  standalone: true,
  host: {
    "[class]": "computedClass()",
  },
})
export class LabelDirective {
  computedClass = computed(() => {
    return classNames(labelVariants())
  })
}
