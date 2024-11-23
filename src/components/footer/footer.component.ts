import { Component } from "@angular/core"
import { GIT_REPO_LINK, VERSION } from "../../utils/constants"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  public version = VERSION
  public gitRepoLink = GIT_REPO_LINK
}
