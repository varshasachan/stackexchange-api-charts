import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SelfieComponent } from './components/selfie/selfie.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'camera', component: SelfieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
