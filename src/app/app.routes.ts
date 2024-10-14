import { Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';

export const routes: Routes = [
  { path: 'create-user', component: UserCreateComponent },
  { path: '', redirectTo: '/create-user', pathMatch: 'full' }, // Default route
];
