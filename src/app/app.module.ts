import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Libraries
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
//Components
import { RowDirective } from './directives/row.directive';
import { ColumnDirective } from './directives/column.directive';
import { HomeComponent } from './views/home/home.component';
import { LoaderComponent } from './views/loader/loader.component';
import { CenterTotallyDirective } from './directives/center-totally.directive';
import { HomebarComponent } from './views/components/homebar/homebar.component';
import { TitlebarComponent } from './views/components/titlebar/titlebar.component';
import { FavoritelistComponent } from './views/favoritelist/favoritelist.component';
import { AgencyDetailComponent } from './views/agency-detail/agency-detail.component';
import { AgencyRowComponent } from './views/components/agency-row/agency-row.component';
import { GoogleMapsComponent } from './views/components/google-maps/google-maps.component';
import { MapdialogComponent } from './views/components/mapdialog/mapdialog.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { NodataComponent } from './views/components/nodata/nodata.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    AgencyDetailComponent,
    CenterTotallyDirective,
    ColumnDirective,
    RowDirective,
    HomebarComponent,
    TitlebarComponent,
    AgencyRowComponent,
    GoogleMapsComponent,
    FavoritelistComponent,
    MapdialogComponent,
    PagenotfoundComponent,
    NodataComponent
    ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
