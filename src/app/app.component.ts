import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, RouterOutlet } from '@angular/router';
// import { fas } from '@fortawesome/free-solid-svg-icons'; 

// import { HomeComponent } from './home/home.component';
// import { SolidIconComponent } from './solid-icon/solid-icon.component';
// import { RegularIconComponent } from './regular-icon/regular-icon.component';
// import { BrandIconComponent } from './brand-icon/brand-icon.component';
// import { routes } from './app.routes'; 
// import { EventService } from './services/EventService'; 
import { RunApp1Component } from './runs/run-app1/run-app1.component';
import { RunApp2Component } from './runs/run-app2/run-app2.component';
import { RunApp3Component } from './runs/run-app3/run-app3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // CommonModule, RouterOutlet, RouterModule,
    RunApp1Component,
    RunApp2Component,
    RunApp3Component,
    // Font
    // HomeComponent,
    // SolidIconComponent,
    // RegularIconComponent,
    // BrandIconComponent
  ],
  template: `    
    <run-app1></run-app1>
    
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title: string = '';
  // route = routes

  // constructor(private eventService: EventService){
  //   this.eventService.listen('updateTitle', (title: string)=>{
  //     this.title = title
  //   })
  // }
}
