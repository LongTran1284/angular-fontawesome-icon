import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolidIconComponent } from './icons/solid-icon/solid-icon.component';
import { RegularIconComponent } from './icons/regular-icon/regular-icon.component';
import { BrandIconComponent } from './icons/brand-icon/brand-icon.component';
import { TestComponent } from './tests/test/test.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'solid-icons', component: SolidIconComponent, title: 'Solid Icons'},
    {path: 'regular-icons', component: RegularIconComponent, title: 'Regular Icons'},
    {path: 'brand-icons', component: BrandIconComponent, title: 'Brand Icons'},
    {path: 'testing', component: TestComponent, title: 'Testing'}
];
