import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { fas } from '@fortawesome/free-solid-svg-icons'; 

// import { HomeComponent } from './home/home.component';
// import { SolidIconComponent } from './solid-icon/solid-icon.component';
// import { RegularIconComponent } from './regular-icon/regular-icon.component';
// import { BrandIconComponent } from './brand-icon/brand-icon.component';
import { routes } from './app.routes'; 
import { EventService } from './services/EventService'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule,
    // Font
    // HomeComponent,
    // SolidIconComponent,
    // RegularIconComponent,
    // BrandIconComponent
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

        <!-- <a 
        class="nav-link" [routerLink]="[route[0]['path']]"
        [ngClass]="title===route[0]['title'] ? 'active' : ''"        
        >
        {{ route[0]['title'] }}
        </a>         

        <a 
        class="nav-link" [routerLink]="[route[1]['path']]"
        [ngClass]="title===route[1]['title'] ? 'active' : ''"        
        >
        {{ route[1]['title'] }}
        </a>   

        <a 
        class="nav-link" [routerLink]="[route[2]['path']]"
        [ngClass]="title===route[2]['title'] ? 'active' : ''"        
        >
        {{ route[2]['title'] }}
        </a>   

        <a 
        class="nav-link" [routerLink]="[route[3]['path']]"
        [ngClass]="title===route[3]['title'] ? 'active' : ''"        
        >
        {{ route[3]['title'] }}
        </a>    -->
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = '';
  route = routes

  constructor(private eventService: EventService){
    this.eventService.listen('updateTitle', (title: string)=>{
      this.title = title
    })
  }
}
