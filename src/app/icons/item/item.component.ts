import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  template: `
    <div class=" p-2 shadow-sm mb-5 mx-3 rounded" >
      <div class="icon" (click)="show_detail=!show_detail">
        <fa-icon [icon]="[item.prefix, item.iconName]"></fa-icon>
      </div>
      
      <div class="detail" *ngIf="show_detail">
        <div class="d-flex">
          <span >Font Name:</span> {{ item.faName }}
        </div>
        <div class="d-flex">
          <span>svg Name:</span> {{ item.iconName }}
        </div>
      </div>      
      
    </div>
    
  `,
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: any;
  show_detail: boolean = false
}
