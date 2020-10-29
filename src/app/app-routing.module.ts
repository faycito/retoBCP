import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyDetailComponent } from './views/agency-detail/agency-detail.component';
import { FavoritelistComponent } from './views/favoritelist/favoritelist.component';
import { HomeComponent } from './views/home/home.component';
import { LoaderComponent } from './views/loader/loader.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: LoaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'agencyDetail/:agency', component: AgencyDetailComponent},
  {path: 'favorites', component: FavoritelistComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
