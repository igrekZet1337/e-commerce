import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faLocationDot = faLocationDot
  faPhone = faPhone
  faFacebook = faFacebook
  faTwitter = faTwitter
  faInstagram = faInstagram
}
