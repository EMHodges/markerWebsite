import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {

  faCoffee = faUpload;
  faTerminal = faTerminal;

  constructor(private router: Router) {}

  clickGettingStarted() {
    this.router.navigate(['/ethics'])
  }

  clickDocumentation() {
    this.router.navigate(['/documentation'])
  }

  clickUpload() {
    this.router.navigate(['/upload'])
    // window.location.href = "https://formfaca.de/sm/Od6jLU8Ea"
  }

}
