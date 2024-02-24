import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { MainService } from '../../services/main.service'; 
import { EventService } from '../../services/EventService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'solid-icon',
  standalone: true,
  imports: [
    CommonModule,  
    FontAwesomeModule,
    ItemComponent
  ],
  template: `
    <div class="container-fluid">
      <h2>Solid Icons: {{ icon_list.length }}</h2>
      <div class="container-fluid px-0 shadow-sm d-flex flex-wrap justify-content-between">                
        <app-item *ngFor="let item of icon_list" [item]="item"></app-item>
      </div>
    </div>
  `,
  styleUrl: './solid-icon.component.css'
})
export class SolidIconComponent {
  icon_list: any[] = []

  constructor(
    private mainService: MainService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private library: FaIconLibrary
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)
      this.library.addIconPacks(fas)
      this.icon_list = this.mainService.getIconList(fas)
  }


}
