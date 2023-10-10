import { Component } from '@angular/core';
import { faUser, faMap, faCogs, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-revlearn',
  templateUrl: './revlearn.component.html',
  styleUrls: ['./revlearn.component.css']
})
export class RevlearnComponent {

  
  role = faUser
  journey = faMap
  stacks = faCogs
  about = faInfoCircle

  showRole: boolean = false
  showJourney: boolean = false
  showStacks: boolean = false
  showAbout: boolean = false
  
  displayRole() {
    this.showRole = true
    this.showJourney = false
    this.showStacks = false
    this.showAbout = false
  }

  displayJourney() {
    this.showRole = false
    this.showJourney = true
    this.showStacks = false
    this.showAbout = false
  }

  displayStacks() {
    this.showRole = false
    this.showJourney = false
    this.showStacks = true
    this.showAbout = false
  }

  displayAbout() {
    this.showRole = false
    this.showJourney = false
    this.showStacks = false
    this.showAbout = true
  }

}
