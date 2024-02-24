import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getIconList(icon: any){
    let icon_list: any = []
    // console.log(icon)
    for (let k of Object.keys(icon)){      
      icon_list.push({faName: k, iconName: icon[k]['iconName'], prefix: icon[k]['prefix']})
    }  
    return icon_list
  }
}
