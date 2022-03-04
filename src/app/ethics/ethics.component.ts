import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent {

  constructor(private router: Router) {}

  model: any = {};

  onSubmit() {
    this.router.navigate(['/download'])
  }
}