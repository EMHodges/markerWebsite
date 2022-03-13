import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markerWebsite';

  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/home'])
  }
}
