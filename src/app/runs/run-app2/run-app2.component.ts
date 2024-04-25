import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { fas } from '@fortawesome/free-solid-svg-icons'; 

// import { HomeComponent } from './home/home.component';
// import { SolidIconComponent } from './solid-icon/solid-icon.component';
// import { RegularIconComponent } from './regular-icon/regular-icon.component';
// import { BrandIconComponent } from './brand-icon/brand-icon.component';
import { routes } from '../../app.routes'; 
import { EventService } from '../../services/EventService'; 
import { HomeComponent } from '../../home/home.component';
import { SolidIconComponent } from '../../icons/solid-icon/solid-icon.component';
import { RegularIconComponent } from '../../icons/regular-icon/regular-icon.component';
import { BrandIconComponent } from '../../icons/brand-icon/brand-icon.component';

@Component({
  selector: 'run-app2',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, RouterOutlet,
    HomeComponent, SolidIconComponent, RegularIconComponent, BrandIconComponent
  ],
  template: `
    <div class="container-fluid">    
      <header>
        <h1>Angular fontawesome Icons</h1>
      </header>

      <p class="d-inline-flex gap-1" id="parent">      
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false" aria-controls="home">
          Home
        </button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#solid-icons" aria-expanded="false" aria-controls="solid-icons">
          Solid Icons
        </button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#regular-icons" aria-expanded="false" aria-controls="regular-icons">
          Regular Icons
        </button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#brand-icons" aria-expanded="false" aria-controls="brand-icons">
          Brand Icons
        </button>
      </p>

      <div class="accordion-collapse collapse" id="home" data-bs-parent="#parent">
        <div class="accordion-body">
          <!-- <app-home></app-home> -->
          Home page
        </div>
      </div>
      <div class="accordion-collapse collapse" id="solid-icons" data-bs-parent="#parent">
        <!-- <div class="card card-body"> -->
        <div class="accordion-body">
          <!-- <solid-icon></solid-icon> -->
          Solid page
        </div>
      </div>
      <div class="accordion-collapse collapse" id="regular-icons" data-bs-parent="#parent">
        <div class="accordion-body">
          Regular page
        </div>
      </div>
      <div class="accordion-collapse collapse" id="brand-icons" data-bs-parent="#parent">
        <div class="accordion-body">
          Brand page
        </div>
      </div>

      <!-- <nav class="nav nav-pills bg-light">       
        <button *ngFor="let item of route"
          class="nav-link"
          [ngClass]="title===item['title'] ? 'active' : ''"
          [routerLink]="[item['path']]"
        >
        {{ item['title'] }}
        </button>                 
      </nav>
      <router-outlet></router-outlet> -->
    </div>
  `,
  styleUrl: './run-app2.component.css'
})
export class RunApp2Component {
  title: string = '';
  route = routes

  constructor(private eventService: EventService){
    this.eventService.listen('updateTitle', (title: string)=>{
      this.title = title
    })
  }
}
