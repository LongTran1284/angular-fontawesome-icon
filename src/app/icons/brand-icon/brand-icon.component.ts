import { Component } from '@angular/core';
import { MainService } from '../../services/main.service'; 
import { EventService } from '../../services/EventService';
import { ActivatedRoute } from '@angular/router';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'brand-icon',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    ItemComponent
  ],
  template: `
    <div class="container-fluid">
      <h2>Brand Icons: {{ icon_list.length }}</h2>
      <div class="container-fluid px-0 shadow-sm d-flex flex-wrap justify-content-between">                
        <app-item *ngFor="let item of icon_list" [item]="item"></app-item>
      </div>
    </div>
  `,
  styleUrl: './brand-icon.component.css'
})
export class BrandIconComponent {
  icon_list: any[] = []

  constructor(
    private mainService: MainService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private library: FaIconLibrary
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)
      this.library.addIconPacks(fab)
      this.icon_list = this.mainService.getIconList(fab)
  }
}
