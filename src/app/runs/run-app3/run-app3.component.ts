import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons'; 

import { HomeComponent } from '../../home/home.component';
import { SolidIconComponent } from '../../icons/solid-icon/solid-icon.component';
import { RegularIconComponent } from '../../icons/regular-icon/regular-icon.component';
import { BrandIconComponent } from '../../icons/brand-icon/brand-icon.component';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'run-app3',
  standalone: true,
  imports: [
    // CommonModule, 
    HomeComponent, SolidIconComponent, RegularIconComponent, BrandIconComponent
  ],
  template: `
    <div class="container-fluid">    
      <header>
        <h1>Angular fontawesome Icons</h1>
      </header>

      <div class="list-group list-group-horizontal  " role="tablist">                
        <button class="list-group-item  list-group-item-action active" id="home-btn" data-bs-toggle="list" data-bs-target="#home">
          Home</button>
        <button class="list-group-item  list-group-item-action" id="solid-btn" data-bs-toggle="list" data-bs-target="#solid" >
          Solid Icons</button>
        <button class="list-group-item  list-group-item-action" id="regular-btn" data-bs-toggle="list" data-bs-target="#regular" >
          Regular Icons</button>
        <button class="list-group-item  list-group-item-action" id="brand-btn" data-bs-toggle="list" data-bs-target="#brand" >
          Brand Icons</button>
      </div>
        
      <div class="tab-content" >
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-btn">
          <app-home></app-home>
        </div>
        <div class="tab-pane fade" id="solid" role="tabpanel" aria-labelledby="solid-btn">
          <solid-icon [icon_list]="fas_list"></solid-icon>
        </div>
        <div class="tab-pane fade" id="regular" role="tabpanel" aria-labelledby="regular-btn">
          <regular-icon [icon_list]="far_list"></regular-icon>
        </div>
        <div class="tab-pane fade" id="brand" role="tabpanel" aria-labelledby="brand-btn">
          <brand-icon [icon_list]="fab_list"></brand-icon>
        </div>
      </div>
       
    </div>
  `,
  styleUrl: './run-app3.component.css'
})
export class RunApp3Component {
  fas_list: any[] = []
  far_list: any[] = []
  fab_list: any[] = []

  constructor(private mainService: MainService, private library: FaIconLibrary){
    this.library.addIconPacks(fas, far, fab)
    this.fas_list = this.mainService.getIconList(fas)
    this.fab_list = this.mainService.getIconList(fab)
    this.far_list = this.mainService.getIconList(far)
  }
}
