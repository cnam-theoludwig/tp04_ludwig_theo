import { TestBed } from "@angular/core/testing"
import { MaxInputCharactersDirective } from "./max-input-characters.directive"
import { ElementRef } from "@angular/core"

class MockElementRef extends ElementRef {
  public constructor() {
    super(null)
  }
}

describe("MaxInputCharactersDirective", () => {
  it("should create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const directive = new MaxInputCharactersDirective(new MockElementRef())
      expect(directive).toBeTruthy()
    })
  })
})
