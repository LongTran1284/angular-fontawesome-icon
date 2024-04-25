import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons'; 

import { routes } from '../../app.routes'; 
import { EventService } from '../../services/EventService'; 
import { MainService } from '../../services/main.service';

import { SolidIconComponent } from '../../icons/solid-icon/solid-icon.component';
import { RegularIconComponent } from '../../icons/regular-icon/regular-icon.component';
import { BrandIconComponent } from '../../icons/brand-icon/brand-icon.component';

@Component({
  selector: 'run-app1',
  standalone: true,
  imports: [
    CommonModule, RouterModule, RouterOutlet,
    SolidIconComponent, RegularIconComponent, BrandIconComponent
  ],
  template: `
    <div class="container-fluid">    
      <header>
        <h1>Angular fontawesome Icons</h1>
      </header>

      <nav class="nav nav-pills bg-light">       
        <button *ngFor="let item of route"
          class="nav-link"
          [ngClass]="title===item['title'] ? 'active' : ''"
          [routerLink]="[item['path']]"
        >
        {{ item['title'] }}
        </button>                 
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './run-app1.component.css'
})
export class RunApp1Component {
  title: string = '';
  route = routes

  constructor(
    private eventService: EventService, 
    private mainService: MainService, 
    private library: FaIconLibrary
    ){
      this.library.addIconPacks(fas, far, fab)      
      this.mainService.solid_icons = this.mainService.getIconList(fas)
      this.mainService.brand_icons = this.mainService.getIconList(fab)
      this.mainService.regular_icons = this.mainService.getIconList(far)
      
      this.eventService.listen('updateTitle', (title: string)=> this.title = title)
  }

}
