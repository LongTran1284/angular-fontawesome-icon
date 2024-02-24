import { Component } from '@angular/core';
import { MainService } from '../../services/main.service'; 
import { EventService } from '../../services/EventService';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons'; 
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'regular-icon',
  standalone: true,
  imports: [
    FontAwesomeModule,
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
  icon_list: any[] = []

  constructor(
    private mainService: MainService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private library: FaIconLibrary
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)
      this.library.addIconPacks(far)
      this.icon_list = this.mainService.getIconList(far)
  }

}
