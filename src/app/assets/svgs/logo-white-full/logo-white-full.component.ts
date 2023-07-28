import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-white-full',
  templateUrl: './logo-white-full.component.html',
  styleUrls: []
})
export class LogoWhiteFullComponent {
  @Input() logoHeight: string = "114"
  @Input() logoWidth: string = "250"

}
