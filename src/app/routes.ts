import { Routes } from "@angular/router";
import { DocumentationComponent } from "./documentation/documentation.component";
import { CanDownloadGuard } from "./download/can-download.guard";
import { DownloadComponent } from "./download/download.component";
import { EthicsComponent } from "./ethics/ethics.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { UploadComponent } from "./upload/upload.component";

export const appRoutes:Routes = [
    { path: 'ethics', component: EthicsComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'download', component: DownloadComponent, canActivate:[CanDownloadGuard] },

]