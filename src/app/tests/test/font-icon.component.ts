import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons'; 

@Component({
  selector: 'font-icon',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  template: `   
    <div style="font-size: 350px" *ngIf="item">
        <fa-icon [icon]="[item.prefix, item.iconName]"></fa-icon>
    </div>
  `,
})
export class FontIconComponent {
    @Input() family: string = 'solid' || 'regular' || 'brand'
    @Input() name: string = 'house-chimney'
    all_icons: any = {
        'solid': [],
        'regular': [],
        'brand': []
    }
    item: any

    constructor(private library: FaIconLibrary){
          this.library.addIconPacks(fas, far, fab)      
          this.all_icons['solid'] = this.getIconList(fas)
          this.all_icons['brand'] = this.getIconList(fab)
          this.all_icons['regular'] = this.getIconList(far)
    }

    ngOnInit(){
        this.getItem()
    }

    getItem(){
        let valid: boolean = false        
        if (this.name){
            for (let el of this.all_icons[this.family]){
                if (el.iconName === this.name){this.item = el; valid=true}                   
            }
            if (!valid) {alert('Wrong Icon Name!!')}
        } else {this.item = ''}
        
    }

    getIconList(icon: any){
        let icon_list: any[] = []
        for (let k of Object.keys(icon)){      
          icon_list.push({faName: k, iconName: icon[k]['iconName'], prefix: icon[k]['prefix']})
        }  
        return icon_list
    }
}
