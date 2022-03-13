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
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    EthicsComponent,
    DownloadComponent,
    UploadComponent,
    HomepageComponent,
    QuestionnaireComponent,
    FileUploadComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
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
