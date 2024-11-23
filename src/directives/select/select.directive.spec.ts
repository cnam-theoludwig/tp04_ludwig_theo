import { TestBed } from "@angular/core/testing"
import { SelectDirective } from "./select.directive"

describe("SelectDirective", () => {
  it("should create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const directive = new SelectDirective()
      expect(directive).toBeTruthy()
    })
  })
})
