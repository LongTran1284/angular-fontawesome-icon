import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../../services/main.service'; 
import { EventService } from '../../services/EventService';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'regular-icon',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent
  ],
  template: `
    <div class="container-fluid">
      <h2>Regular Icons: {{ icon_list.length }}</h2>
      <div class="container-fluid px-0 shadow-sm d-flex flex-wrap justify-content-between">                
        <app-item *ngFor="let item of icon_list" [item]="item"></app-item>
      </div>
    </div>
  `,
  styleUrl: './regular-icon.component.css'
})
export class RegularIconComponent {
  @Input() icon_list: any[] = []

  constructor(
    private mainService: MainService,
    private eventService: EventService,
    private route: ActivatedRoute,
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)      
      this.icon_list = this.mainService.regular_icons
  }
}
