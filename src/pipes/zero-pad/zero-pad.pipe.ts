import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "zeroPad",
  standalone: true,
})
export class ZeroPadPipe implements PipeTransform {
  public transform(value: number, places: number = 2): string {
    return value.toString().padStart(places, "0")
  }
}
