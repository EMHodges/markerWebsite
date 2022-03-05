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

@NgModule({
  declarations: [
    AppComponent,
    EthicsComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    BrowserAnimationsModule
  ],
  providers: [
    CanDownloadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
