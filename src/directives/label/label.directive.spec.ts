import { TestBed } from "@angular/core/testing"
import { LabelDirective } from "./label.directive"

describe("LabelDirective", () => {
  it("should create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const directive = new LabelDirective()
      expect(directive).toBeTruthy()
    })
  })
})
