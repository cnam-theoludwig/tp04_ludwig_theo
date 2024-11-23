import { TestBed } from "@angular/core/testing"
import { ButtonDirective } from "./button.directive"

describe("ButtonDirective", () => {
  it("should create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ButtonDirective()
      expect(directive).toBeTruthy()
    })
  })
})
