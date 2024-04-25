import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainService } from '../../services/main.service'; 
import { EventService } from '../../services/EventService';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'solid-icon',
  standalone: true,
  imports: [
    CommonModule,  
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
  @Input() icon_list: any[] = []

  constructor(
    private mainService: MainService,
    private eventService: EventService,
    private route: ActivatedRoute,    
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)      
      this.icon_list = this.mainService.solid_icons
  }

}
