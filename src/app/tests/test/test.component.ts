import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/EventService';
import { FontIconComponent } from './font-icon.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FontIconComponent, FormsModule],
  template: `
    <form (ngSubmit)="updateValue()">
      <div class="w-25">
        <div class="d-flex justify-content-between mb-3">
          <span >Family:</span>
          <input type="text" [(ngModel)]="family" name="family" id="family"/>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <span >Icon Name:</span>
          <input type="text" [(ngModel)]="name" name="name" id="name"/>
        </div>
      </div>
      <input 
        class='btn btn-primary'
        type='submit'
        value='Show Icon'                
      />
    </form>
    <!-- <br> -->
    <font-icon [family]="family" [name]="name" ></font-icon>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  family: string = 'solid'
  name: string = 'beer-mug-empty'

  @ViewChild(FontIconComponent) child!: FontIconComponent

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)  
  }

  updateValue(){    
    this.child.getItem()
  }
}
