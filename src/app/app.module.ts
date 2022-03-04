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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    CanDownloadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
