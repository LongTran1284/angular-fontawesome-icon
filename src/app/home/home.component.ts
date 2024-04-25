import { Component } from '@angular/core';
import { EventService } from '../services/EventService';
import { ActivatedRoute } from '@angular/router';

import pkg from '../../../package.json'

// to import json file, we need to add "resolveJsonModule": true, into tsconfig.json/compilerOptions
// the versions from package.json are different to tsc --version and ng version. I don't know why...


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#versions">
            <h3>Versions</h3>
          </button>
        </div>
        <div id="versions" class="accordion-collapse collapse " >
          <div class="accordion-body">
            <div class="content">{{ versions }}</div>         
            <hr>   
            <h6>Developed by Long Tran - 24/02/2024</h6>
          </div>          
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#installation">
            <h3>Installation</h3>
          </button>
        </div>
        <div id="installation" class="accordion-collapse collapse " >
          <div class="accordion-body">
            <p>Source: <a href="https://github.com/FortAwesome/angular-fontawesome" target="_blank">
              https://github.com/FortAwesome/angular-fontawesome</a></p>
            
            <p class="content">{{ installation }}</p>
          </div>          
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#usage">
            <h3>How to use</h3>
          </button>
        </div>
        <div id="usage" class="accordion-collapse collapse " >
          <div class="accordion-body">            
            <div class="content">
              <p><strong>Method 1: using exactly font name</strong></p>
              {{ method1 }}
              <p><strong>Method 2: using icon name (svg filename)</strong></p>
              <p>svg files: <a href="https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs">
              https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs</a></p>
              {{ method2 }}
            </div>            
          </div>          
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#new">
            <h3>New 2024: Using customized library lg-icons</h3>
          </button>
        </div>
        <div id="new" class="accordion-collapse collapse " >
          <div class="accordion-body">            
            <div class="content">{{ new2024 }}</div>            
          </div>          
        </div>
      </div>
    </div>
    

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  versions: string =   
  `Angular CLI version: ${ pkg.devDependencies['@angular/cli'] } 
  Typescript version: ${ pkg.devDependencies.typescript } 
  Angular FontAwesome version: ${ pkg.dependencies['@fortawesome/angular-fontawesome'] } 
  Solid Icons version: ${ pkg.dependencies['@fortawesome/free-solid-svg-icons'] } 
  Regular Icons version: ${ pkg.dependencies['@fortawesome/free-regular-svg-icons'] } 
  Brand Icons version: ${ pkg.dependencies['@fortawesome/free-brands-svg-icons'] } 
  `
  installation: string = 
  `ng add @fortawesome/angular-fontawesome \n
  select library to install or install manually: 
  npm install @fortawesome/free-brands-svg-icons 
  npm install @fortawesome/free-regular-svg-icons 
  npm install @fortawesome/free-solid-svg-icons
  `
  method1: string =
  `import { Component } from '@angular/core';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
  import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

  @Component({
  selector: 'search-bar',
  standalone: true,
  imports: [
    FontAwesomeModule, // to use <fa-icon> selector
  ],
  template: 
    "<fa-icon [icon]="search_icon"></fa-icon>"
  ,
  styleUrl: './search-bar.component.css'
  })
  export class SearchBarComponent {
    search_icon = faSearch
  }

  `
  method2: string =
  `<fa-icon [icon]="[icon_prefix, icon_name]"></fa-icon>

  import { Component } from '@angular/core';
  import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons'; 
  import { fab } from '@fortawesome/free-brands-svg-icons'; 

  @Component({
    selector: 'fontawesome',
    standalone: true,
    imports: [FontAwesomeModule],
    template:       
      <fa-icon [icon]="['fas', 'magnifying-glass']"></fa-icon>
      <fa-icon [icon]="['fab', '42-group']"></fa-icon>
      <fa-icon [icon]="['far', 'coffee']" ></fa-icon>    
    ,
    styleUrl: './list-angular-fontawesome.component.css'
  })
  export class ListAngularFontawesomeComponent {
    
    constructor(private library: FaIconLibrary){
      this.library.addIconPacks(fas, far, fab)      
    }
  `
  new2024: string =
  `** Install the lg-icons library:

  npm install ./ANGULAR/MyLibrary/lg-icons-0.0.1.tgz
  
  ** import the library:

  import { LgIconLibrary } from 'lg-icons';
  @Component({
    [...]
    imports: [
      LgIconLibrary, 
      ...
    ],

  ** using library:

  <lg-icon family="solid" name="trash-can"></lg-icon>

  family default name is 'solid', we can choose 'regular' or 'brand'
  name is svg name, refer to this webapp.

  `

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    ){
      this.eventService.emitt('updateTitle', this.route.snapshot.title)    
  }
  

}
