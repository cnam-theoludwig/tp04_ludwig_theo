import { computed, Directive, input } from "@angular/core"
import type { VariantProps } from "cva"
import { cva } from "cva"
import { classNames } from "../../utils/classNames"

const inputVariants = cva({
  base: "placeholder:text-gray-darker focus-visible:border-primary focus-visible:ring-primary border-gray relative h-10 w-full min-w-0 appearance-none rounded-md border border-solid bg-inherit text-base outline outline-2 outline-offset-2 outline-transparent focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ps-4 pe-4",
  variants: {
    state: {
      idle: "",
      error: "border-error ring-error ring-1",
    },
  },
  defaultVariants: {
    state: "idle",
  },
})

type InputVariants = VariantProps<typeof inputVariants>

@Directive({
  selector: "[appInput]",
  standalone: true,
  host: {
    "[class]": "computedClass()",
  },
})
export class InputDirective {
  public state = input<InputVariants["state"]>()

  public computedClass = computed(() => {
    return classNames(
      inputVariants({
        state: this.state(),
      }),
    )
  })
}
