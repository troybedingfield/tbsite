import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
        path: '',
        component: MainLayoutComponent,
        children: [{
            path: '',
            component: HomeComponent,
        }
        ]
    }
];
