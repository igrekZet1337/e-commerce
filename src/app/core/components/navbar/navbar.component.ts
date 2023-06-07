import { Component } from '@angular/core';
import { IconDefinition, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faArrowRightToBracket: IconDefinition = faArrowRightToBracket
  
}
