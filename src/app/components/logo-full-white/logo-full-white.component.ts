import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-full-white',
  templateUrl: './logo-full-white.component.html',
  styleUrls: ['./logo-full-white.component.css']
})
export class LogoFullWhiteComponent {
	@Input() logoHeight: string = "114"
	@Input() logoWidth: string = "250"
}
