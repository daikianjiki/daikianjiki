import { Component } from '@angular/core';
import { faHome, faInfoCircle, faFolderOpen, faCode, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faSquare}  from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  Home = faHome
  About = faInfoCircle
  Projects = faFolderOpen
  TechStacks = faCode
  EmploymentHistory = faBriefcase
  Education = faGraduationCap
  Square = faSquare
}
