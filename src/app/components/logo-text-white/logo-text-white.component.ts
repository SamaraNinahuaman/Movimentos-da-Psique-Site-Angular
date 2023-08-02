import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-text-white',
  templateUrl: './logo-text-white.component.html',
  styleUrls: ['./logo-text-white.component.css']
})
export class LogoTextWhiteComponent {
	@Input() logoHeight: string = "114"
	@Input() logoWidth: string = "250"
}
