import { TestBed } from "@angular/core/testing"
import { InputDirective } from "./input.directive"

describe("InputDirective", () => {
  it("should create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const directive = new InputDirective()
      expect(directive).toBeTruthy()
    })
  })
})
