import { computed, Directive, input } from "@angular/core"
import { cva, type VariantProps } from "cva"
import { classNames } from "../../utils/classNames"

const buttonVariants = cva({
  base: "relative inline-flex items-center justify-center overflow-hidden rounded-md text-base font-semibold transition duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      "primary-solid": "bg-primary hover:bg-primary/80 text-white",
      "primary-outline":
        "border-primary text-primary hover:bg-primary border-2 bg-transparent hover:text-white",

      "success-solid": "bg-success hover:bg-success/80 text-white",
      "success-outline":
        "border-success text-success hover:bg-success border-2 bg-transparent hover:text-white",

      "error-solid": "bg-error hover:bg-error/80 text-white",
      "error-outline":
        "border-error text-error hover:bg-error border-2 bg-transparent hover:text-white",
    },
    size: {
      small: "h-8 font-medium text-sm rounded-md px-3",
      medium: "h-10 px-4 py-2",
      large: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "primary-solid",
    size: "medium",
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

@Directive({
  selector: "[appButton]",
  standalone: true,
  host: {
    "[class]": "computedClass()",
  },
})
export class ButtonDirective {
  size = input<ButtonVariants["size"]>()
  variant = input<ButtonVariants["variant"]>()

  computedClass = computed(() => {
    return classNames(
      buttonVariants({ variant: this.variant(), size: this.size() }),
    )
  })
}
