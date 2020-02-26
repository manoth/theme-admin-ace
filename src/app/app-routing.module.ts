import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './pages/sign/sign.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContentComponent } from './layouts/content/content.component';
import { DashboardComponent } from './contents/dashboard/dashboard.component';


const routes: Routes = [
  // { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignComponent },
  { path: 'signup', component: SignComponent },
  { path: 'forgot', component: SignComponent },
  {
    path: '', component: ContentComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
