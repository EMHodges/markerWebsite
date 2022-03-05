import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthicsComponent } from './ethics/ethics.component';
import { appRoutes } from './routes';
import { DownloadComponent } from './download/download.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDownloadGuard } from './download/can-download.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UploadComponent } from './upload/upload.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    EthicsComponent,
    DownloadComponent,
    UploadComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    BrowserAnimationsModule
  ],
  providers: [
    CanDownloadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
