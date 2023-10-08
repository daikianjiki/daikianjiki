import { Component } from '@angular/core';
import { faHome, faInfoCircle, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  Home = faHome
  About = faInfoCircle
  Projects = faFolderOpen

}
